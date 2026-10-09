import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0loxh3qm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0loxh3qm"/>`,
		"fallback": "energy-icons:align-justify-48",
	});
}

export default Component;
