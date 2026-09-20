import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_6rk7bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_6rk7bye"/>`,
		"fallback": "keyline-icons:expand-dashed-down-right",
	});
}

export default Component;
