import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5_xztpbo.css';
import '../../css/f/f9bz07hha.css';
import '../../css/l/l408b8b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="a5_xztpbo"/><rect class="f9bz07hha"/><path clip-rule="evenodd" class="l408b8b8s"/></g>`,
		"fallback": "lets-icons:battery-full-light",
	});
}

export default Component;
