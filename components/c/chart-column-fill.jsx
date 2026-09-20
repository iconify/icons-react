import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nit84jbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nit84jbau"/>`,
		"fallback": "keyline-icons:chart-column-fill",
	});
}

export default Component;
