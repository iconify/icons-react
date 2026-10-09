import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2irslbbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2irslbbx"/>`,
		"fallback": "energy-icons:align-left-48-bold",
	});
}

export default Component;
