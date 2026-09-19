import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pno4gmb4n.css';
import '../../css/t/tgau90b0h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pno4gmb4n"/><path class="tgau90b0h"/></g>`,
		"fallback": "glyphs:chevron-double",
	});
}

export default Component;
