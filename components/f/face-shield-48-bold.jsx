import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw97jvbso.css';
import '../../css/w/wafnaez8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw97jvbso"/><path class="wafnaez8x"/>`,
		"fallback": "energy-icons:face-shield-48-bold",
	});
}

export default Component;
