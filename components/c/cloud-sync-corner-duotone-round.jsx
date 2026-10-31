import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjmi06bqq.css';
import '../../css/a/a2f-6zbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjmi06bqq"/><path class="a2f-6zbpz"/></g>`,
		"fallback": "coolicons:cloud-sync-corner-duotone-round",
	});
}

export default Component;
