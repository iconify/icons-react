import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpqbf2nmb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vpqbf2nmb"/>`,
		"fallback": "streamline-plump:half-star-2-remix",
	});
}

export default Component;
