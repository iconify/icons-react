import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo061fb5h.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo061fb5h"/>`,
		"fallback": "jam:cutter-f",
	});
}

export default Component;
