import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h921llb8w.css';
import '../../css/a/ausrfdcxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h921llb8w"/><path class="ausrfdcxh"/>`,
		"fallback": "energy-icons:charging-schedule-20-bold",
	});
}

export default Component;
