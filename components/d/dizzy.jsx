import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi2u0qhkb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi2u0qhkb"/>`,
		"fallback": "fluent-emoji-high-contrast:dizzy",
	});
}

export default Component;
