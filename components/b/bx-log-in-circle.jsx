import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgj9wvwbi.css';
import '../../css/t/tvkysof6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgj9wvwbi"/><path class="tvkysof6t"/>`,
		"fallback": "bx:bx-log-in-circle",
	});
}

export default Component;
