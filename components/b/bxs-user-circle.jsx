import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nekv9-ksl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nekv9-ksl"/>`,
		"fallback": "bx:bxs-user-circle",
	});
}

export default Component;
