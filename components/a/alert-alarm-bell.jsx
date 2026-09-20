import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcgp_8b8u.css';
import '../../css/p/pfta5kb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcgp_8b8u"/><path class="pfta5kb6m"/></g>`,
		"fallback": "streamline-freehand-color:alert-alarm-bell",
	});
}

export default Component;
