import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mstj7kszp.css';

const viewBox = {"width":1024,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mstj7kszp"/>`,
		"fallback": "whh:camel",
	});
}

export default Component;
