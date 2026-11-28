import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3rpl4bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3rpl4bxz"/>`,
		"fallback": "noviair-light:clipboard-medical-edit",
	});
}

export default Component;
