import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hki1y3bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hki1y3bkk"/>`,
		"fallback": "withicons:hotel-solid",
	});
}

export default Component;
