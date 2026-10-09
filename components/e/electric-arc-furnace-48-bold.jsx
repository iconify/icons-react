import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqszs5bfa.css';
import '../../css/e/et3b916ly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqszs5bfa"/><path class="et3b916ly"/>`,
		"fallback": "energy-icons:electric-arc-furnace-48-bold",
	});
}

export default Component;
