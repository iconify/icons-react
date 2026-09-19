import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-a3n1cad.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-a3n1cad"/>`,
		"fallback": "whh:dominoeight",
	});
}

export default Component;
