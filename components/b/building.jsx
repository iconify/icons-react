import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u__b9iwlh.css';
import '../../css/w/wqtak9bex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u__b9iwlh"/><path class="wqtak9bex"/>`,
		"fallback": "cil:building",
	});
}

export default Component;
