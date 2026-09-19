import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af0yy_bnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af0yy_bnb"/>`,
		"fallback": "game-icons:fire-ray",
	});
}

export default Component;
