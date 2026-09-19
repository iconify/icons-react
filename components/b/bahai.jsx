import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlbiui_0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlbiui_0e"/>`,
		"fallback": "boxicons:bahai",
	});
}

export default Component;
