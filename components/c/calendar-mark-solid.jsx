import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouox2hb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ouox2hb3h"/>`,
		"fallback": "streamline-sharp:calendar-mark-solid",
	});
}

export default Component;
