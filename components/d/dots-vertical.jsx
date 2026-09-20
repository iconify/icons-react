import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhv7v7_ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhv7v7_ld"/>`,
		"fallback": "mdi-light:dots-vertical",
	});
}

export default Component;
