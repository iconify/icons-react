import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfw__5bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfw__5bqb"/>`,
		"fallback": "ri:arrow-up-wide-fill",
	});
}

export default Component;
