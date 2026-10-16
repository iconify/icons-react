import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlyerkbto.css';
import '../../css/u/u0bew_y1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlyerkbto"/><path class="u0bew_y1l"/>`,
		"fallback": "energy-icons:carbon-negative-48-bold",
	});
}

export default Component;
