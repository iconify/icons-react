import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqmk94bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqmk94bil"/>`,
		"fallback": "mdi:city-swap",
	});
}

export default Component;
