import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-0e2ykrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-0e2ykrb"/>`,
		"fallback": "ri:compass-3-fill",
	});
}

export default Component;
