import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1y5c0sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk1y5c0sj"/>`,
		"fallback": "basil:folder-solid",
	});
}

export default Component;
