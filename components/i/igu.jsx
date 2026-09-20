import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmoqc4wyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmoqc4wyo"/>`,
		"fallback": "token:igu",
	});
}

export default Component;
