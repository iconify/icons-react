import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjawzsb4y.css';
import '../../css/p/pdkgkyb6c.css';
import '../../css/q/qd6mgbbws.css';
import '../../css/i/ilp7cotte.css';
import '../../css/q/qm6k3bcej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjawzsb4y"/><path class="pdkgkyb6c"/><path class="qd6mgbbws"/><path class="ilp7cotte"/><path class="qm6k3bcej"/></g>`,
		"fallback": "streamline-cyber-color:flag-3",
	});
}

export default Component;
