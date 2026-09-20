import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eylc-nbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eylc-nbxa"/>`,
		"fallback": "mdi:clock-time-three",
	});
}

export default Component;
