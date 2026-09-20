import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oos8e6bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oos8e6bxd"/>`,
		"fallback": "ri:color-filter-fill",
	});
}

export default Component;
