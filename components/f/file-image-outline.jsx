import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnfv9-m_c.css';
import '../../css/t/tc0hjmbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dnfv9-m_c"/><path class="tc0hjmbon"/></g>`,
		"fallback": "flowbite:file-image-outline",
	});
}

export default Component;
