import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbncpjb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbncpjb3z"/>`,
		"fallback": "griddy-icons:eye-filled",
	});
}

export default Component;
