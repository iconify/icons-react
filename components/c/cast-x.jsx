import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im2a0lb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im2a0lb1r"/>`,
		"fallback": "noviair:cast-x",
	});
}

export default Component;
