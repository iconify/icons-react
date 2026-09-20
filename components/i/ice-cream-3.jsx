import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/expxr3b1h.css';
import '../../css/f/fofyspbsq.css';
import '../../css/i/i3dstgkth.css';
import '../../css/n/nf6xi1nyz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="expxr3b1h"/><path class="fofyspbsq"/><path class="i3dstgkth"/><path class="nf6xi1nyz"/></g>`,
		"fallback": "streamline:ice-cream-3",
	});
}

export default Component;
