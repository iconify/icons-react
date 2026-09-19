import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2d4n202r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2d4n202r"/>`,
		"fallback": "heroicons:identification-solid",
	});
}

export default Component;
