import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a419sp39j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a419sp39j"/>`,
		"fallback": "game-icons:flat-tire",
	});
}

export default Component;
