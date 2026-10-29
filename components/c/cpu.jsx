import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vjsd4sbgq.css';
import '../../css/k/kx9parvdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vjsd4sbgq"/><path class="kx9parvdn wm-a"/></g>`,
		"fallback": "withicons:cpu",
	});
}

export default Component;
