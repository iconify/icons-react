import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz4r9rwwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz4r9rwwo"/>`,
		"fallback": "ri:discount-percent-fill",
	});
}

export default Component;
