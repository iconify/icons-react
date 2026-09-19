import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twcjeh8ux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twcjeh8ux"/>`,
		"fallback": "game-icons:cobra",
	});
}

export default Component;
