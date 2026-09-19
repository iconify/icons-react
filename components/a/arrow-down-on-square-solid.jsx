import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz17a-bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz17a-bwc"/>`,
		"fallback": "heroicons:arrow-down-on-square-solid",
	});
}

export default Component;
