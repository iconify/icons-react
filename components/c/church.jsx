import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx_nbgaic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx_nbgaic"/>`,
		"fallback": "fluent-emoji-high-contrast:church",
	});
}

export default Component;
