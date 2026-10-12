import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_yowkbgo.css';
import '../../css/l/lgdstuzsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_yowkbgo"/><path class="lgdstuzsh"/>`,
		"fallback": "energy-icons:binder-48-bold",
	});
}

export default Component;
