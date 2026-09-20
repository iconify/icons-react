import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpfu2-g_m.css';
import '../../css/h/h1bs0-k7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tpfu2-g_m"/><path class="h1bs0-k7p"/></g>`,
		"fallback": "keyline-icons:chevrons-up-two-tone",
	});
}

export default Component;
