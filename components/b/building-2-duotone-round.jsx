import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao-7xzujy.css';
import '../../css/x/xgdo7q_mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ao-7xzujy"/><path class="xgdo7q_mf"/></g>`,
		"fallback": "coolicons:building-2-duotone-round",
	});
}

export default Component;
