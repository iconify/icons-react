import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mytv6xbyl.css';
import '../../css/v/va8q5vg9j.css';
import '../../css/y/y8j-xvbmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mytv6xbyl"/><path class="va8q5vg9j"/><path class="y8j-xvbmi"/>`,
		"fallback": "energy-icons:greenhouse-48",
	});
}

export default Component;
