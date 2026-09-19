import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_jv-6uof.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_jv-6uof"/>`,
		"fallback": "glyphs:hand-call-outline",
	});
}

export default Component;
