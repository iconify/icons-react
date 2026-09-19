import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqj42rb8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqj42rb8f"/>`,
		"fallback": "fa-solid:fan",
	});
}

export default Component;
