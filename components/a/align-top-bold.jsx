import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nelsscpmr.css';
import '../../css/f/fx2vq-b3e.css';
import '../../css/r/r5hjnw2io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nelsscpmr"/><path class="fx2vq-b3e"/><path class="r5hjnw2io"/>`,
		"fallback": "solar:align-top-bold",
	});
}

export default Component;
