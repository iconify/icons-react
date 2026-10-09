import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkayohb4a.css';
import '../../css/n/n76vy6bdn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkayohb4a"/><path class="n76vy6bdn"/>`,
		"fallback": "energy-icons:cricket-20",
	});
}

export default Component;
