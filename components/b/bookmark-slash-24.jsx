import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr0yhbb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr0yhbb8e"/>`,
		"fallback": "octicon:bookmark-slash-24",
	});
}

export default Component;
