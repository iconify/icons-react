import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaws_22cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaws_22cn"/>`,
		"fallback": "iconamoon:calendar-2-thin",
	});
}

export default Component;
