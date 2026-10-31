import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk8jf1izq.css';
import '../../css/t/tdvfme0qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk8jf1izq"/><path class="tdvfme0qd"/></g>`,
		"fallback": "coolicons:brush-duotone-round",
	});
}

export default Component;
