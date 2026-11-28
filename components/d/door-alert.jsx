import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmls51bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmls51bbh"/>`,
		"fallback": "noviair-light:door-alert",
	});
}

export default Component;
