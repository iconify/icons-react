import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eca3_qbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eca3_qbjr"/>`,
		"fallback": "ri:add-large-fill",
	});
}

export default Component;
