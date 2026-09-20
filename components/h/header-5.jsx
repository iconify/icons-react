import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llnvy_sqt.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llnvy_sqt"/>`,
		"fallback": "jam:header-5",
	});
}

export default Component;
