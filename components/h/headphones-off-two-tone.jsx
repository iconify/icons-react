import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7m6sdbaq.css';
import '../../css/g/g_exohbwp.css';
import '../../css/f/f22w_cdcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7m6sdbaq"/><path class="g_exohbwp"/><path class="f22w_cdcx"/></g>`,
		"fallback": "keyline-icons:headphones-off-two-tone",
	});
}

export default Component;
