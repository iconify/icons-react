import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woejr8lkf.css';
import '../../css/h/h8ky2qf0l.css';
import '../../css/w/wbh530b4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woejr8lkf"/><path class="h8ky2qf0l"/><path class="wbh530b4c"/>`,
		"fallback": "energy-icons:cloud-sync-20-bold",
	});
}

export default Component;
