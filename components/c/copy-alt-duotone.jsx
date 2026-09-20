import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlj7muv1i.css';
import '../../css/o/ob0ilvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlj7muv1i"/><path class="ob0ilvbgu"/></g>`,
		"fallback": "si:copy-alt-duotone",
	});
}

export default Component;
