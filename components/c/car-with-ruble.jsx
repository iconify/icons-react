import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgsqbac3r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgsqbac3r"/>`,
		"fallback": "pinhead:car-with-ruble",
	});
}

export default Component;
