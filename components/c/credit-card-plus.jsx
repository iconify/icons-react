import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d79hhqbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d79hhqbax"/>`,
		"fallback": "griddy-icons:credit-card-plus",
	});
}

export default Component;
