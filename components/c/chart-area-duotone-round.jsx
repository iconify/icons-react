import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3n13ibyi.css';
import '../../css/h/h--2zto-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3n13ibyi"/><path class="h--2zto-i"/></g>`,
		"fallback": "coolicons:chart-area-duotone-round",
	});
}

export default Component;
