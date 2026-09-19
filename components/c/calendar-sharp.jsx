import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-iton1dp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-iton1dp"/>`,
		"fallback": "ion:calendar-sharp",
	});
}

export default Component;
