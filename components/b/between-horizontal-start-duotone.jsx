import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8n3f77dg.css';
import '../../css/w/whu3vhbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j8n3f77dg"/><path class="whu3vhbjx"/></g>`,
		"fallback": "lucide-extended:between-horizontal-start-duotone",
	});
}

export default Component;
