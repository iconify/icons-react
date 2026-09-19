import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eish1fbap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eish1fbap"/>`,
		"fallback": "game-icons:centurion-helmet",
	});
}

export default Component;
