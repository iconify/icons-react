import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr0yipbxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr0yipbxp"/>`,
		"fallback": "material-icon-theme:exe",
	});
}

export default Component;
