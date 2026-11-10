import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyqgdqbif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wyqgdqbif"/>`,
		"fallback": "at-icons:frog",
	});
}

export default Component;
