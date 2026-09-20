import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmbk2pjqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmbk2pjqb"/>`,
		"fallback": "mdi:align-vertical-distribute",
	});
}

export default Component;
