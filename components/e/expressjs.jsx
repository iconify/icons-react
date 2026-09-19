import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcdlnf99m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcdlnf99m"/>`,
		"fallback": "griddy-icons:expressjs",
	});
}

export default Component;
