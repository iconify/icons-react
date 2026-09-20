import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1b6gccuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="n1b6gccuq"/>`,
		"fallback": "wordpress:drawer-left",
	});
}

export default Component;
