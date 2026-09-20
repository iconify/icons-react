import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_u8-1key.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_u8-1key"/>`,
		"fallback": "ri:battery-saver-line",
	});
}

export default Component;
