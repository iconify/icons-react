import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctrl1fpbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctrl1fpbz"/>`,
		"fallback": "mdi:cube-unfolded",
	});
}

export default Component;
