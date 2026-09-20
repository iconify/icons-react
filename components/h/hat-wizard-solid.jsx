import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7adn7brw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7adn7brw"/>`,
		"fallback": "la:hat-wizard-solid",
	});
}

export default Component;
