import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtv-78cph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtv-78cph"/>`,
		"fallback": "mdi:golf-tee",
	});
}

export default Component;
