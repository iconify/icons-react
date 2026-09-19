import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st2ftqbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st2ftqbwz"/>`,
		"fallback": "griddy-icons:alert-triangle",
	});
}

export default Component;
