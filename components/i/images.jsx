import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tt9n7hbyj.css';
import '../../css/k/kwi6a8ecm.css';
import '../../css/x/x1c2z_baq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tt9n7hbyj"/><path class="kwi6a8ecm"/><path class="x1c2z_baq"/></g>`,
		"fallback": "glyphs:images",
	});
}

export default Component;
