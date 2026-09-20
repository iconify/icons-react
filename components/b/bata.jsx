import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgso5lb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgso5lb9j"/>`,
		"fallback": "thesvg-color:bata",
	});
}

export default Component;
