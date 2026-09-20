import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwveq4b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwveq4b4n"/>`,
		"fallback": "simple-icons:acura",
	});
}

export default Component;
