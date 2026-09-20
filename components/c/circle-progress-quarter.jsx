import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbr34pbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbr34pbxz"/>`,
		"fallback": "keyline-icons:circle-progress-quarter",
	});
}

export default Component;
