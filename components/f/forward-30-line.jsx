import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrr2tobrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrr2tobrp"/>`,
		"fallback": "ri:forward-30-line",
	});
}

export default Component;
