import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed4eppq-r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed4eppq-r"/>`,
		"fallback": "glyphs:center-focus-weak",
	});
}

export default Component;
