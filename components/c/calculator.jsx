import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/e/eh8r4ccab.css';
import '../../css/e/e2cr6acpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="te-6n-baq"/><path class="eh8r4ccab"/><path class="e2cr6acpy"/></g>`,
		"fallback": "iconaut:calculator",
	});
}

export default Component;
