import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5d-kzbmg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5d-kzbmg"/>`,
		"fallback": "fluent-emoji-high-contrast:eggplant",
	});
}

export default Component;
