import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnjlucb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnjlucb2q primary"/>`,
		"fallback": "iconaut:fold-horizontal-duotone",
	});
}

export default Component;
