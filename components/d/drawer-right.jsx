import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0tavab4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="j0tavab4d"/>`,
		"fallback": "wordpress:drawer-right",
	});
}

export default Component;
