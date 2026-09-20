import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii-15nbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii-15nbsq"/>`,
		"fallback": "ri:add-circle-fill",
	});
}

export default Component;
