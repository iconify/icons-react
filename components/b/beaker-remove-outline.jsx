import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sckf1ebqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sckf1ebqi"/>`,
		"fallback": "mdi:beaker-remove-outline",
	});
}

export default Component;
