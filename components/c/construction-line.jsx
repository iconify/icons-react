import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjo1cmsza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjo1cmsza"/>`,
		"fallback": "mingcute:construction-line",
	});
}

export default Component;
