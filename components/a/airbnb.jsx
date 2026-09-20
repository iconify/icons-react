import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7t_hc8su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7t_hc8su"/>`,
		"fallback": "thesvg:airbnb",
	});
}

export default Component;
