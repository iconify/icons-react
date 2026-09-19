import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb4xue22f.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb4xue22f"/>`,
		"fallback": "zmdi:calendar-account",
	});
}

export default Component;
