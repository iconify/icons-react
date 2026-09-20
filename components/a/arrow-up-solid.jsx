import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3jbebss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-3jbebss"/>`,
		"fallback": "pixel:arrow-up-solid",
	});
}

export default Component;
