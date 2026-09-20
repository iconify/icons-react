import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pw7dqg-5z.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/e/e5vqnab3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pw7dqg-5z"/><path class="p53xcyb3q"/><path class="e5vqnab3e"/></g>`,
		"fallback": "keyline-icons:chart-area-sharp-two-tone",
	});
}

export default Component;
