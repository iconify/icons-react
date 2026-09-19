import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5e_gbbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5e_gbbhi"/>`,
		"fallback": "gg:if-design",
	});
}

export default Component;
