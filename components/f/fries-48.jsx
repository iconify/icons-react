import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1iximrex.css';
import '../../css/f/f7x3lpbdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1iximrex"/><path class="f7x3lpbdr"/>`,
		"fallback": "energy-icons:fries-48",
	});
}

export default Component;
