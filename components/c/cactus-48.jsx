import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1pu6btt.css';
import '../../css/d/d4ndp2pgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el1pu6btt"/><path class="d4ndp2pgy"/>`,
		"fallback": "energy-icons:cactus-48",
	});
}

export default Component;
