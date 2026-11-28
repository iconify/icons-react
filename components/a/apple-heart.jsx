import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj9x2t-hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj9x2t-hb"/>`,
		"fallback": "noviair-light:apple-heart",
	});
}

export default Component;
