import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozl6xx3lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozl6xx3lz"/>`,
		"fallback": "thesvg-color:bookstack",
	});
}

export default Component;
