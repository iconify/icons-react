import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luqtis4dk.css';
import '../../css/l/l1s4kwyog.css';
import '../../css/n/nfvp6y46e.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="luqtis4dk"/><path class="l1s4kwyog"/><path class="nfvp6y46e"/></g>`,
		"fallback": "tdesign:ai-music",
	});
}

export default Component;
