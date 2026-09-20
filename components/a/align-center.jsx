import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7metob3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="p7metob3i"/>`,
		"fallback": "wordpress:align-center",
	});
}

export default Component;
