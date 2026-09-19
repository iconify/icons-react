import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcgu1x-sp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcgu1x-sp"/>`,
		"fallback": "fluent-mdl2:global-nav-button-active",
	});
}

export default Component;
