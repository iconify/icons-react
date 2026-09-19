import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nopt0ba4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nopt0ba4r"/>`,
		"fallback": "hugeicons:arrow-up-right-02",
	});
}

export default Component;
