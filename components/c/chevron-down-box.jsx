import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eym5mrbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eym5mrbiu"/>`,
		"fallback": "mdi:chevron-down-box",
	});
}

export default Component;
