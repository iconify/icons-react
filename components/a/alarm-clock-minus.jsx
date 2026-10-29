import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzkk5e04a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzkk5e04a"/>`,
		"fallback": "vadivam:alarm-clock-minus",
	});
}

export default Component;
