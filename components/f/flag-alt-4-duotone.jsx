import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyati7dqq.css';
import '../../css/w/wys65d_hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyati7dqq"/><path class="wys65d_hx"/></g>`,
		"fallback": "si:flag-alt-4-duotone",
	});
}

export default Component;
