import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khz2yzbvv.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khz2yzbvv"/>`,
		"fallback": "jam:arrow-down",
	});
}

export default Component;
