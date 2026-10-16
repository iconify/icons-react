import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js4ro1b0l.css';
import '../../css/y/y-afnmd_s.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js4ro1b0l"/><path class="y-afnmd_s"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:home-battery-alert-48",
	});
}

export default Component;
