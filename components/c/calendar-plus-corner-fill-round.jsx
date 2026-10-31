import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv25jcc7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv25jcc7x"/>`,
		"fallback": "coolicons:calendar-plus-corner-fill-round",
	});
}

export default Component;
