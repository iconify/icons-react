import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuzqp_opo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuzqp_opo"/>`,
		"fallback": "vadivam:alarm-clock-off",
	});
}

export default Component;
