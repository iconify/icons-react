import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqu-jov0y.css';
import '../../css/i/i2hezybim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqu-jov0y"/><path class="i2hezybim"/>`,
		"fallback": "energy-icons:depot-charging-48-bold",
	});
}

export default Component;
