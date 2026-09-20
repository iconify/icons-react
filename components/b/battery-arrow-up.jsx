import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch_hmgptv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch_hmgptv"/>`,
		"fallback": "mdi:battery-arrow-up",
	});
}

export default Component;
