import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hgduwhblm.css';
import '../../css/p/pg-pw1_lh.css';
import '../../css/n/neagcpb_a.css';
import '../../css/i/i6q05pbsj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hgduwhblm"/><path class="pg-pw1_lh"/><path class="neagcpb_a"/><path class="i6q05pbsj"/></g>`,
		"fallback": "glyphs:die-2-outline",
	});
}

export default Component;
