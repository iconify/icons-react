import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9t00gb6u.css';
import '../../css/u/ujj6t-i1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9t00gb6u"/><path class="ujj6t-i1r"/>`,
		"fallback": "energy-icons:arrow-left-48",
	});
}

export default Component;
