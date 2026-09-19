import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtwyitx-o.css';

const viewBox = {"width":400,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtwyitx-o"/>`,
		"fallback": "zmdi:format-list-bulleted",
	});
}

export default Component;
