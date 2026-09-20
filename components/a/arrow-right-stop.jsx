import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ips62-yfz.css';
import '../../css/g/gdmlkmb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ips62-yfz"/><path class="gdmlkmb8n"/></g>`,
		"fallback": "lets-icons:arrow-right-stop",
	});
}

export default Component;
