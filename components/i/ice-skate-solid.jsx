import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_i5_b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_i5_b0g"/>`,
		"fallback": "iconaut:ice-skate-solid",
	});
}

export default Component;
