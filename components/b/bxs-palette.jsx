import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s273oab-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s273oab-k"/>`,
		"fallback": "bx:bxs-palette",
	});
}

export default Component;
