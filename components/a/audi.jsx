import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guqzcut-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guqzcut-m"/>`,
		"fallback": "thesvg:audi",
	});
}

export default Component;
