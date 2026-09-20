import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkved3btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkved3btd"/>`,
		"fallback": "keyline-icons:door-open",
	});
}

export default Component;
