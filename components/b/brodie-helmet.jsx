import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h86di18bu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h86di18bu"/>`,
		"fallback": "game-icons:brodie-helmet",
	});
}

export default Component;
