import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0yozqbdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0yozqbdd"/>`,
		"fallback": "selfhst:discover-card-light",
	});
}

export default Component;
