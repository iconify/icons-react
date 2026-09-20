import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ndoqbps.css';

const viewBox = {"width":440,"height":371};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ndoqbps"/>`,
		"fallback": "thesvg-color:decathlon-logo",
	});
}

export default Component;
