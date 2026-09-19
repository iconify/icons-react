import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9pe_nrcw.css';

const viewBox = {"width":84,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9pe_nrcw"/>`,
		"fallback": "glyphs:cogs-bold",
	});
}

export default Component;
