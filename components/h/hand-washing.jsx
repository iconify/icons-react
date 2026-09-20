import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/djvowre1f.css';
import '../../css/i/isuxm5bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="djvowre1f"/><path class="isuxm5bho"/></g>`,
		"fallback": "streamline-sharp:hand-washing",
	});
}

export default Component;
