import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqbv1hb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqbv1hb3a"/>`,
		"fallback": "solar:full-screen-square-outline",
	});
}

export default Component;
