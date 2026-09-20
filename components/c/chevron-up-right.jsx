import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isy_o2iqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isy_o2iqz"/>`,
		"fallback": "mynaui:chevron-up-right",
	});
}

export default Component;
