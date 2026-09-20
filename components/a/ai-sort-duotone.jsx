import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asdwtibdn.css';
import '../../css/q/q2lv2fbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asdwtibdn"/><path class="q2lv2fbeg"/></g>`,
		"fallback": "si:ai-sort-duotone",
	});
}

export default Component;
