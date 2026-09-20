import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7su_645o.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7su_645o"/>`,
		"fallback": "jam:chevron-circle-up-right-f",
	});
}

export default Component;
