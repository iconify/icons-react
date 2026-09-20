import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eivc34lmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eivc34lmt"/>`,
		"fallback": "typcn:arrow-right-outline",
	});
}

export default Component;
