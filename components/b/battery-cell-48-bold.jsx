import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlsjaz2ur.css';
import '../../css/m/mp2bmtb4q.css';
import '../../css/h/hfhgd-2kf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlsjaz2ur"/><path class="mp2bmtb4q"/><path class="hfhgd-2kf"/>`,
		"fallback": "energy-icons:battery-cell-48-bold",
	});
}

export default Component;
