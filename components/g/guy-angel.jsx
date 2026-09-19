import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta0-vub6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta0-vub6r"/>`,
		"fallback": "ps:guy-angel",
	});
}

export default Component;
