import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukzk-pb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukzk-pb_y"/>`,
		"fallback": "thesvg-color:dc-entertainment",
	});
}

export default Component;
