import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_zv80mu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_zv80mu"/>`,
		"fallback": "fluent-emoji-high-contrast:construction",
	});
}

export default Component;
