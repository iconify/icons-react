import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w64l-ub0s.css';
import '../../css/f/f8bjlbjhm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w64l-ub0s"/><path class="f8bjlbjhm"/>`,
		"fallback": "energy-icons:corner-down-left-48",
	});
}

export default Component;
