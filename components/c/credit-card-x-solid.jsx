import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixep7l6xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixep7l6xi"/>`,
		"fallback": "mynaui:credit-card-x-solid",
	});
}

export default Component;
