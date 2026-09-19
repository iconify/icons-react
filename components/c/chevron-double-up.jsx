import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn4p--2fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn4p--2fx"/>`,
		"fallback": "mono-icons:chevron-double-up",
	});
}

export default Component;
