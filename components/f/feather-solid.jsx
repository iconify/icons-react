import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hklh74bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hklh74bfj"/>`,
		"fallback": "withicons:feather-solid",
	});
}

export default Component;
