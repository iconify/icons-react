import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyrpwqb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyrpwqb6i"/>`,
		"fallback": "bxs:calendar",
	});
}

export default Component;
