import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql_214b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql_214b5x"/>`,
		"fallback": "typcn:arrow-up-outline",
	});
}

export default Component;
