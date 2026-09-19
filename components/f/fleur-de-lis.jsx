import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgpu54aut.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgpu54aut"/>`,
		"fallback": "fluent-emoji-high-contrast:fleur-de-lis",
	});
}

export default Component;
