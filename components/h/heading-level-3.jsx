import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trz7voh4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="trz7voh4i"/>`,
		"fallback": "wordpress:heading-level-3",
	});
}

export default Component;
