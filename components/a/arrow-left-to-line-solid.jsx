import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oalh-698v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oalh-698v"/>`,
		"fallback": "withicons:arrow-left-to-line-solid",
	});
}

export default Component;
