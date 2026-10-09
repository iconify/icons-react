import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsiaoacww.css';
import '../../css/q/q5pax_b_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsiaoacww"/><path class="q5pax_b_e"/>`,
		"fallback": "energy-icons:bookmark-check-48",
	});
}

export default Component;
