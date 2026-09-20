import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id6bgqbhb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id6bgqbhb"/>`,
		"fallback": "streamline-color:arrow-shrink-diagonal-1-flat",
	});
}

export default Component;
