import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myubs7t0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myubs7t0w"/>`,
		"fallback": "vadivam:alarm-clock-minus",
	});
}

export default Component;
