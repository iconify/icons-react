import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq657hbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq657hbdm"/>`,
		"fallback": "noviair:heading-3",
	});
}

export default Component;
