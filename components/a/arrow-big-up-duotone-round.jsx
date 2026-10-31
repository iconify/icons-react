import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoxmaybph.css';
import '../../css/q/qvv7a4knr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xoxmaybph"/><path class="qvv7a4knr"/></g>`,
		"fallback": "coolicons:arrow-big-up-duotone-round",
	});
}

export default Component;
