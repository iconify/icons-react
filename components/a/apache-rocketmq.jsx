import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8pmyt8ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8pmyt8ji"/>`,
		"fallback": "thesvg-color:apache-rocketmq",
	});
}

export default Component;
