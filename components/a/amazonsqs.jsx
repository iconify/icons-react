import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkozv6_ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkozv6_ko"/>`,
		"fallback": "simple-icons:amazonsqs",
	});
}

export default Component;
