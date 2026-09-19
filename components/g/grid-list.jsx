import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev5qcabkn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev5qcabkn"/>`,
		"fallback": "glyphs:grid-list",
	});
}

export default Component;
