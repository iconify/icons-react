import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw33au4cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw33au4cn"/>`,
		"fallback": "mingcute:first-aid-kit-line",
	});
}

export default Component;
