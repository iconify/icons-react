import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dltsm_4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dltsm_4ox"/>`,
		"fallback": "uiw:circle-close",
	});
}

export default Component;
