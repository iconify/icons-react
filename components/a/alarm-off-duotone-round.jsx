import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1v41vl7a.css';
import '../../css/f/fo6ymko1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1v41vl7a"/><path class="fo6ymko1a"/></g>`,
		"fallback": "coolicons:alarm-off-duotone-round",
	});
}

export default Component;
