import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnj1uyw7u.css';
import '../../css/j/jrg8o7ldv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnj1uyw7u"/><path class="jrg8o7ldv"/>`,
		"fallback": "energy-icons:graduation-cap-48-bold",
	});
}

export default Component;
