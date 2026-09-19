import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak5e5k5fa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak5e5k5fa"/>`,
		"fallback": "game-icons:helmet-head-shot",
	});
}

export default Component;
