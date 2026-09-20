import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-a-7_ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw-a-7_ww"/>`,
		"fallback": "mdi:arrow-top-right-thin-circle-outline",
	});
}

export default Component;
