import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn6lwobzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn6lwobzd"/>`,
		"fallback": "reicon:check-read",
	});
}

export default Component;
