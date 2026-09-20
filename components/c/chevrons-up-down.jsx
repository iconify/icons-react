import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khjrhnv3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khjrhnv3q"/>`,
		"fallback": "mynaui:chevrons-up-down",
	});
}

export default Component;
