import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4bws3b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4bws3b3g"/>`,
		"fallback": "eva:bulb-fill",
	});
}

export default Component;
