import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og00ut_0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og00ut_0s"/>`,
		"fallback": "mingcute:cellphone-vibration-line",
	});
}

export default Component;
