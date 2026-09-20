import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtr5x3_vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtr5x3_vp"/>`,
		"fallback": "mdi:hand-double-tap",
	});
}

export default Component;
