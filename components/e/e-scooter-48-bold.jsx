import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3wg84b-p.css';
import '../../css/i/ikxx9ebbh.css';
import '../../css/z/zm9x9jbta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3wg84b-p"/><path class="ikxx9ebbh"/><path class="zm9x9jbta"/>`,
		"fallback": "energy-icons:e-scooter-48-bold",
	});
}

export default Component;
