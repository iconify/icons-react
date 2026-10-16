import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql2jakbhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql2jakbhe"/>`,
		"fallback": "energy-icons:haze-48",
	});
}

export default Component;
