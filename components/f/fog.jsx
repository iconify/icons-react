import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytmx3s51g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytmx3s51g"/>`,
		"fallback": "fluent-emoji-high-contrast:fog",
	});
}

export default Component;
