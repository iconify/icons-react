import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs91p4brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs91p4brs"/>`,
		"fallback": "griddy-icons:clipboard-plus-filled",
	});
}

export default Component;
