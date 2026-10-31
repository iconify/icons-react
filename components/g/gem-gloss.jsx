import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk5kukw1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk5kukw1q"/>`,
		"fallback": "withicons:gem-gloss",
	});
}

export default Component;
