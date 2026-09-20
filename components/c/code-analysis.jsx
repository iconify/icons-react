import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fvi2rcqlc.css';
import '../../css/i/i-fcocbiw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fvi2rcqlc"/><path class="i-fcocbiw"/></g>`,
		"fallback": "streamline:code-analysis",
	});
}

export default Component;
