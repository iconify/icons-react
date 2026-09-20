import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rog-zac5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rog-zac5o"/>`,
		"fallback": "ri:candle-line",
	});
}

export default Component;
