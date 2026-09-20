import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sypk8ebrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sypk8ebrs"/>`,
		"fallback": "tdesign:arrow-left-down",
	});
}

export default Component;
