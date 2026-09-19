import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nog1ec50u.css';
import '../../css/f/fwgp05b5h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nog1ec50u"/><path class="fwgp05b5h"/></g>`,
		"fallback": "glyphs:crosshairs",
	});
}

export default Component;
