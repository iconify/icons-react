import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqbqh9b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqbqh9b-i"/>`,
		"fallback": "keyline-icons:folder-arrow-down",
	});
}

export default Component;
