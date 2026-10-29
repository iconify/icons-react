import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b9xwaeb0f.css';
import '../../css/k/kx9parvdn.css';
import '../../css/v/vjsd4sbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b9xwaeb0f"/><path class="kx9parvdn wm-a"/><path class="vjsd4sbgq"/></g>`,
		"fallback": "withicons:cpu-duo",
	});
}

export default Component;
