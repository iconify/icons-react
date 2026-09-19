import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aud31ibrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aud31ibrr"/>`,
		"fallback": "bxs:cricket-ball",
	});
}

export default Component;
