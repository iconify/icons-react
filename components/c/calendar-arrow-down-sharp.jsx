import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4bney4jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4bney4jn"/>`,
		"fallback": "keyline-icons:calendar-arrow-down-sharp",
	});
}

export default Component;
