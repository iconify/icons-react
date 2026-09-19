import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lio3y5lbh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lio3y5lbh"/>`,
		"fallback": "bi:ev-station-fill",
	});
}

export default Component;
