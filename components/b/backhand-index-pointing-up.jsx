import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnv4d6brh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnv4d6brh"/>`,
		"fallback": "fluent-emoji-high-contrast:backhand-index-pointing-up",
	});
}

export default Component;
