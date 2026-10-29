import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyo0a_ipl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyo0a_ipl"/>`,
		"fallback": "withicons:grid-2x2-solid",
	});
}

export default Component;
