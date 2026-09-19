import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi10br14x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi10br14x"/>`,
		"fallback": "fxemoji:emptynotepage",
	});
}

export default Component;
