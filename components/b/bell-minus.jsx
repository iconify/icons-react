import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlds2mbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlds2mbdn"/>`,
		"fallback": "mdi:bell-minus",
	});
}

export default Component;
