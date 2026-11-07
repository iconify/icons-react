import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m92zv-bjj.css';
import '../../css/d/dmh6kqbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m92zv-bjj"/><path clip-rule="evenodd" class="dmh6kqbha"/>`,
		"fallback": "solar:bell-off-bold",
	});
}

export default Component;
