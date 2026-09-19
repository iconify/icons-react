import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7mn_xgnv.css';
import '../../css/q/qcums4bin.css';
import '../../css/u/u0h4nqdfi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="h7mn_xgnv"><path class="qcums4bin"/><path class="u0h4nqdfi"/></g>`,
		"fallback": "glyphs:eye-outline",
	});
}

export default Component;
