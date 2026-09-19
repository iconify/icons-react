import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/slr0pnb7r.css';
import '../../css/f/fsae2ipvt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="slr0pnb7r"/><path class="fsae2ipvt"/></g>`,
		"fallback": "glyphs:dollar-bills",
	});
}

export default Component;
