import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0sjwb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx0sjwb2f"/>`,
		"fallback": "mdi:emoticon-remove-outline",
	});
}

export default Component;
