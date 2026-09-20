import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo-cg4aud.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lo-cg4aud"/>`,
		"fallback": "streamline:cocktail-solid",
	});
}

export default Component;
