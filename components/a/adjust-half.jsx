import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-_j0scof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-_j0scof"/>`,
		"fallback": "uil:adjust-half",
	});
}

export default Component;
