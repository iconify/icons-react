import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v18o_dbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="v18o_dbsg"/>`,
		"fallback": "wordpress:chevron-down",
	});
}

export default Component;
