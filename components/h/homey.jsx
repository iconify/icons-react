import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yom80o2yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yom80o2yg"/>`,
		"fallback": "cbi:homey",
	});
}

export default Component;
