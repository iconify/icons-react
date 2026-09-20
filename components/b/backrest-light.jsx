import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adn0iybjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adn0iybjp"/>`,
		"fallback": "selfhst:backrest-light",
	});
}

export default Component;
