import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml7wh4fzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml7wh4fzz"/>`,
		"fallback": "thesvg-color:h2-database",
	});
}

export default Component;
