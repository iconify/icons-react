import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxw52nabo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxw52nabo"/>`,
		"fallback": "vadivam:calendar-cog",
	});
}

export default Component;
