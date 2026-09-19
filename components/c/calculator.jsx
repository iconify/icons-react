import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4afgeb-d.css';
import '../../css/v/v1z4zvbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4afgeb-d"/><path class="v1z4zvbtf"/>`,
		"fallback": "bx:calculator",
	});
}

export default Component;
