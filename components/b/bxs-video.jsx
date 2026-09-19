import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkhlsmt2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkhlsmt2t"/>`,
		"fallback": "bx:bxs-video",
	});
}

export default Component;
