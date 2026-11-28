import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oee2xac1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oee2xac1o"/>`,
		"fallback": "iconaut:circle-parking-solid",
	});
}

export default Component;
