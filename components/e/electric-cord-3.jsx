import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uze7hp3kd.css';
import '../../css/p/pt907-bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uze7hp3kd"/><path class="pt907-bqp"/></g>`,
		"fallback": "streamline-sharp:electric-cord-3",
	});
}

export default Component;
