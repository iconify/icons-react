import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omy7fbu9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omy7fbu9o"/>`,
		"fallback": "akar-icons:arrow-down-right",
	});
}

export default Component;
