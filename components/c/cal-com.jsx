import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb0ly6wwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb0ly6wwg"/>`,
		"fallback": "thesvg-color:cal-com",
	});
}

export default Component;
