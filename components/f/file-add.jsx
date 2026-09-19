import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lnb_ebbzb.css';
import '../../css/g/gt8eqgjgu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lnb_ebbzb"/><path class="gt8eqgjgu"/></g>`,
		"fallback": "glyphs:file-add",
	});
}

export default Component;
