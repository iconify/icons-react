import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjtqf-b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjtqf-b7r"/>`,
		"fallback": "matita:chevron-up",
	});
}

export default Component;
