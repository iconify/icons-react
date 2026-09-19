import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzyvr_bnf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzyvr_bnf"/>`,
		"fallback": "glyphs:bars-offset",
	});
}

export default Component;
