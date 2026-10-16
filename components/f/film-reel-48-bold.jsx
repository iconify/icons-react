import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw6oy3bzc.css';
import '../../css/m/m-5n_6hvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw6oy3bzc"/><path class="m-5n_6hvb"/>`,
		"fallback": "energy-icons:film-reel-48-bold",
	});
}

export default Component;
