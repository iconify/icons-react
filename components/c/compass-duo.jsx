import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1_erobys.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/f/f8xqsfb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1_erobys secondary"/><g class="dt0cm9dhy primary"><path class="spokbjbne"/><path class="f8xqsfb6s"/></g>`,
		"fallback": "iconaut:compass-duo",
	});
}

export default Component;
