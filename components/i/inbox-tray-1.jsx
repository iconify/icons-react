import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drt20ub7v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drt20ub7v"/>`,
		"fallback": "streamline:inbox-tray-1",
	});
}

export default Component;
