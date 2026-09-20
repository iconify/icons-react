import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idbul_oyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idbul_oyi"/>`,
		"fallback": "mdi:bookmark-multiple",
	});
}

export default Component;
