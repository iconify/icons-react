import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6u501b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6u501b_z"/>`,
		"fallback": "cbi:bazarr",
	});
}

export default Component;
