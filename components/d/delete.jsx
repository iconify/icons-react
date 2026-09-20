import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in6m0ccyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in6m0ccyc"/>`,
		"fallback": "typcn:delete",
	});
}

export default Component;
