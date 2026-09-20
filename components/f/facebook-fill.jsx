import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1yewilkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1yewilkz"/>`,
		"fallback": "ri:facebook-fill",
	});
}

export default Component;
