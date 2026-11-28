import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwwck0bud.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwwck0bud"/>`,
		"fallback": "pullo:headphones-slash-thin",
	});
}

export default Component;
