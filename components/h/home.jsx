import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffc06yb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffc06yb6a"/>`,
		"fallback": "majesticons:home",
	});
}

export default Component;
