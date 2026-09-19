import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg3_7vbdk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg3_7vbdk"/>`,
		"fallback": "icomoon-free:credit-card",
	});
}

export default Component;
