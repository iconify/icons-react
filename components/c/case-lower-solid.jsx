import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl64idgpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl64idgpz"/>`,
		"fallback": "withicons:case-lower-solid",
	});
}

export default Component;
