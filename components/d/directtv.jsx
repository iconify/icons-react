import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehc2xkc2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehc2xkc2c"/>`,
		"fallback": "cbi:directtv",
	});
}

export default Component;
