import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qww9sz6vc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qww9sz6vc"/>`,
		"fallback": "energy-icons:infinity-48-bold",
	});
}

export default Component;
