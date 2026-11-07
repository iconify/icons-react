import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2y5qfqd.css';
import '../../css/v/v3iz6x59v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy2y5qfqd"/><path class="v3iz6x59v"/>`,
		"fallback": "solar:bookmark-minus-bold-duotone",
	});
}

export default Component;
