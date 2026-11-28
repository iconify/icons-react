import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbvy1n6bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbvy1n6bc"/>`,
		"fallback": "iconaut:hospital-solid",
	});
}

export default Component;
