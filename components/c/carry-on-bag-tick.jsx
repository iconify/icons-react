import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf4gv2feu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf4gv2feu"/>`,
		"fallback": "mdi:carry-on-bag-tick",
	});
}

export default Component;
