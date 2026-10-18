import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2aljf7ie.css';
import '../../css/m/mxxm6-awx.css';
import '../../css/u/uk8t_bc8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2aljf7ie"/><path class="mxxm6-awx"/><path class="uk8t_bc8m"/>`,
		"fallback": "energy-icons:ground-mount-20",
	});
}

export default Component;
