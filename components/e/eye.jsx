import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdrqyt9af.css';
import '../../css/g/gp8fatbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qdrqyt9af"/><circle class="gp8fatbpd"/></g>`,
		"fallback": "lets-icons:eye",
	});
}

export default Component;
