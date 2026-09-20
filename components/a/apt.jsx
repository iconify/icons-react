import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1zey7w6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1zey7w6u"/>`,
		"fallback": "token:apt",
	});
}

export default Component;
