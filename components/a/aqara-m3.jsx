import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug9i3c-fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug9i3c-fx"/>`,
		"fallback": "cbi:aqara-m3",
	});
}

export default Component;
