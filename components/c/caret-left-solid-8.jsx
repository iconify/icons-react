import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5nbq8jeu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5nbq8jeu"/>`,
		"fallback": "fluent-mdl2:caret-left-solid-8",
	});
}

export default Component;
