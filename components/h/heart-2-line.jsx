import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd2lh0b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd2lh0b1m"/>`,
		"fallback": "ri:heart-2-line",
	});
}

export default Component;
