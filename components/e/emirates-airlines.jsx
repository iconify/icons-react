import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvr21dbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvr21dbxj"/>`,
		"fallback": "cbi:emirates-airlines",
	});
}

export default Component;
