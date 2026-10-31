import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds8t-zdtw.css';
import '../../css/i/iewudv1sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ds8t-zdtw"/><path class="iewudv1sj"/></g>`,
		"fallback": "coolicons:circle-medium-duotone-round",
	});
}

export default Component;
