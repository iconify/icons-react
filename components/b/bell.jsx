import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un83tfh1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un83tfh1b"/>`,
		"fallback": "keyline-icons:bell",
	});
}

export default Component;
