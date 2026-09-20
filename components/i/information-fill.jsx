import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s02i13bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s02i13bjj"/>`,
		"fallback": "ri:information-fill",
	});
}

export default Component;
