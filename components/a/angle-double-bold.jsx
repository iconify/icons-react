import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di2q-x_mr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di2q-x_mr"/>`,
		"fallback": "glyphs:angle-double-bold",
	});
}

export default Component;
