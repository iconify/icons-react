import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3srz291p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3srz291p"/>`,
		"fallback": "mynaui:brand-dribbble-solid",
	});
}

export default Component;
