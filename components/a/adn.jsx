import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1ybyoq8x.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1ybyoq8x"/>`,
		"fallback": "fa:adn",
	});
}

export default Component;
