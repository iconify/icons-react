import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn-s6sfow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn-s6sfow"/>`,
		"fallback": "fontisto:arrow-right-l",
	});
}

export default Component;
