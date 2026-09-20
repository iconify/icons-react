import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu0ax1bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu0ax1bgf"/>`,
		"fallback": "mynaui:asterisk-waves",
	});
}

export default Component;
