import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxc_o1bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxc_o1bzn"/>`,
		"fallback": "iconaut:corner-notch-solid",
	});
}

export default Component;
