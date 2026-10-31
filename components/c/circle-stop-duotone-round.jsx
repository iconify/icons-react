import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcjq-cucx.css';
import '../../css/g/g_yl12b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcjq-cucx"/><path class="g_yl12b1c"/></g>`,
		"fallback": "coolicons:circle-stop-duotone-round",
	});
}

export default Component;
