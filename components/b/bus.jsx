import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrt54buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrt54buk"/>`,
		"fallback": "bxs:bus",
	});
}

export default Component;
