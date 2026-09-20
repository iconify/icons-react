import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvpi71b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvpi71b7p"/>`,
		"fallback": "mynaui:chart-no-axes-column-solid",
	});
}

export default Component;
