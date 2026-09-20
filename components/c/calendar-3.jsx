import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/voz08m7ep.css';
import '../../css/g/grn7czb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="voz08m7ep"/><path class="grn7czb6p"/></g>`,
		"fallback": "tdesign:calendar-3",
	});
}

export default Component;
