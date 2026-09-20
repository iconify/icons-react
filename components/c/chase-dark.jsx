import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcp4wuuyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcp4wuuyo"/>`,
		"fallback": "thesvg-color:chase-dark",
	});
}

export default Component;
