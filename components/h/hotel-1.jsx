import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qzg0hgokr.css';
import '../../css/d/d_vdg6b8x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qzg0hgokr"/><path class="d_vdg6b8x"/></g>`,
		"fallback": "glyphs:hotel-1",
	});
}

export default Component;
