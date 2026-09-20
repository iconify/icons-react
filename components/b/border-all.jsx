import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw1dj155k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw1dj155k"/>`,
		"fallback": "mdi-light:border-all",
	});
}

export default Component;
