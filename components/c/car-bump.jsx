import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/axm2d6b8r.css';
import '../../css/g/gcn6cinhv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="axm2d6b8r"/><path class="gcn6cinhv"/></g>`,
		"fallback": "glyphs:car-bump",
	});
}

export default Component;
