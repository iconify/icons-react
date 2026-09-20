import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw8u3l8sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw8u3l8sr"/>`,
		"fallback": "mdi:hydrogen-station",
	});
}

export default Component;
