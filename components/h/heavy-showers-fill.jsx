import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts0qd2ado.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts0qd2ado"/>`,
		"fallback": "ri:heavy-showers-fill",
	});
}

export default Component;
