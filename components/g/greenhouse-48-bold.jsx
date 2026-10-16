import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/css7eeb7b.css';
import '../../css/s/sfw5-4b4t.css';
import '../../css/l/l8okk4b6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="css7eeb7b"/><path class="sfw5-4b4t"/><path class="l8okk4b6r"/>`,
		"fallback": "energy-icons:greenhouse-48-bold",
	});
}

export default Component;
