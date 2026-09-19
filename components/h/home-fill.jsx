import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8bf7_9ae.css';
import '../../css/w/wmc2ozbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8bf7_9ae"/><path class="wmc2ozbxa"/>`,
		"fallback": "eva:home-fill",
	});
}

export default Component;
