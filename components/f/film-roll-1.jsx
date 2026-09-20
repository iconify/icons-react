import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fv8r0uz2w.css';
import '../../css/u/uf276yc7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fv8r0uz2w"/><path class="uf276yc7s"/></g>`,
		"fallback": "streamline:film-roll-1",
	});
}

export default Component;
