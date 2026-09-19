import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh2uq7v6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh2uq7v6a"/>`,
		"fallback": "heroicons:adjustments-horizontal",
	});
}

export default Component;
