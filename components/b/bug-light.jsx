import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugrz9ubjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugrz9ubjf"/>`,
		"fallback": "lets-icons:bug-light",
	});
}

export default Component;
