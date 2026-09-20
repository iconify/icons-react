import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woae-0z3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woae-0z3y"/>`,
		"fallback": "token:cng",
	});
}

export default Component;
