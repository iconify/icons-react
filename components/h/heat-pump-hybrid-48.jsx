import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsqs2tb6j.css';
import '../../css/w/w1hy86m-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsqs2tb6j"/><path class="w1hy86m-v"/>`,
		"fallback": "energy-icons:heat-pump-hybrid-48",
	});
}

export default Component;
