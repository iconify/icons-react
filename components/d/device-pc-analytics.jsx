import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2hliacfi.css';
import '../../css/e/ef59tss4q.css';
import '../../css/m/mh6qz6i7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2hliacfi"/><path class="ef59tss4q"/><path class="mh6qz6i7z"/></g>`,
		"fallback": "andrsrxn:device-pc-analytics",
	});
}

export default Component;
