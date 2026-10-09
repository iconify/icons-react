import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex6kn_g6k.css';
import '../../css/s/s1dmhkb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex6kn_g6k"/><path class="s1dmhkb6p"/>`,
		"fallback": "energy-icons:chef-knife-48",
	});
}

export default Component;
