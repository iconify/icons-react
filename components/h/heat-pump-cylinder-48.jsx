import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4yrw2bbq.css';
import '../../css/e/e6lx946pz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4yrw2bbq"/><path class="e6lx946pz"/>`,
		"fallback": "energy-icons:heat-pump-cylinder-48",
	});
}

export default Component;
