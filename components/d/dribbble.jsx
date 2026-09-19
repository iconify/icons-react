import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urgz1kfox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urgz1kfox"/>`,
		"fallback": "fontisto:dribbble",
	});
}

export default Component;
