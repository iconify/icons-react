import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti114kbus.css';
import '../../css/i/irw67gb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ti114kbus"/><path class="irw67gb8r"/></g>`,
		"fallback": "streamline-ultimate-color:caps",
	});
}

export default Component;
