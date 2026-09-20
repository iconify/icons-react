import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icgs5jzlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icgs5jzlf"/>`,
		"fallback": "ri:expand-up-down-fill",
	});
}

export default Component;
