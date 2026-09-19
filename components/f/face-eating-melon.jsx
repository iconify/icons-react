import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p84hqbcae.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p84hqbcae"/>`,
		"fallback": "dinkie-icons:face-eating-melon",
	});
}

export default Component;
