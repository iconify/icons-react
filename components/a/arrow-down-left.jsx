import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ublp4abft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ublp4abft"/>`,
		"fallback": "mynaui:arrow-down-left",
	});
}

export default Component;
