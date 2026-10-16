import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_epzybyz.css';
import '../../css/i/ihy07ry6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_epzybyz"/><path class="ihy07ry6k"/>`,
		"fallback": "energy-icons:heat-pump-hybrid-48-bold",
	});
}

export default Component;
