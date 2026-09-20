import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3h3sv7mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3h3sv7mn"/>`,
		"fallback": "ri:expand-diagonal-s-2-line",
	});
}

export default Component;
