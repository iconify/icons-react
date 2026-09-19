import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3vxv7txk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3vxv7txk"/>`,
		"fallback": "glyphs:camp-outline",
	});
}

export default Component;
