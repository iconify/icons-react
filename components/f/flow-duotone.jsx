import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n66xyjbkf.css';
import '../../css/s/squ8znb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n66xyjbkf"/><path class="squ8znb9z"/></g>`,
		"fallback": "si:flow-duotone",
	});
}

export default Component;
