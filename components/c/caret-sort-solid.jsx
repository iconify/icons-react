import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxqkl9rnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxqkl9rnc"/>`,
		"fallback": "flowbite:caret-sort-solid",
	});
}

export default Component;
