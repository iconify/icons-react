import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxy5bwbbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxy5bwbbr"/>`,
		"fallback": "energy-icons:charging-lane-48",
	});
}

export default Component;
