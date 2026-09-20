import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu341abxr.css';
import '../../css/k/khza6gz6n.css';
import '../../css/r/rkyevfkwh.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="pu341abxr"/><path class="khza6gz6n"/><path class="rkyevfkwh"/>`,
		"fallback": "thesvg-color:godonateme-light",
	});
}

export default Component;
