import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veez9zr5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="veez9zr5c"/>`,
		"fallback": "wordpress:chevron-up-down",
	});
}

export default Component;
