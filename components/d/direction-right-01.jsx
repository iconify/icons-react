import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joaz6-u6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joaz6-u6g"/>`,
		"fallback": "hugeicons:direction-right-01",
	});
}

export default Component;
