import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4m5ftbzx.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4m5ftbzx"/>`,
		"fallback": "zmdi:closed-caption",
	});
}

export default Component;
