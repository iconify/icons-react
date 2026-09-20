import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiu-54b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiu-54b6b"/>`,
		"fallback": "mdi-light:eye-off",
	});
}

export default Component;
