import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c90di0b3f.css';
import '../../css/e/eet8n35zw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c90di0b3f"/><path class="eet8n35zw"/></g>`,
		"fallback": "streamline:graph-dot",
	});
}

export default Component;
