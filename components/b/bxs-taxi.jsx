import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdqpy3b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdqpy3b2a"/>`,
		"fallback": "bx:bxs-taxi",
	});
}

export default Component;
