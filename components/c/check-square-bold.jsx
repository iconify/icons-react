import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqt3tyb-o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sqt3tyb-o"/>`,
		"fallback": "glyphs:check-square-bold",
	});
}

export default Component;
