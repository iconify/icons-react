import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j09di39bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j09di39bv"/>`,
		"fallback": "ri:car-line",
	});
}

export default Component;
