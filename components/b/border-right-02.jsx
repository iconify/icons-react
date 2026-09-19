import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbd7tvy7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbd7tvy7i"/>`,
		"fallback": "hugeicons:border-right-02",
	});
}

export default Component;
