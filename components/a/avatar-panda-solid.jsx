import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfdzy9bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfdzy9bat"/>`,
		"fallback": "withicons:avatar-panda-solid",
	});
}

export default Component;
