import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h61y6nb_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h61y6nb_v"/>`,
		"fallback": "energy-icons:cloud-hail-48-bold",
	});
}

export default Component;
