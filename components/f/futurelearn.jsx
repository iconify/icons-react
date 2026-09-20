import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctjsmxv6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctjsmxv6u"/>`,
		"fallback": "simple-icons:futurelearn",
	});
}

export default Component;
