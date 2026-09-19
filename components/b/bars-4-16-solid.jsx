import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5tqbubdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h5tqbubdt"/>`,
		"fallback": "heroicons:bars-4-16-solid",
	});
}

export default Component;
