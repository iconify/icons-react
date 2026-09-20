import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7a949o5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7a949o5h"/>`,
		"fallback": "tabler:credit-card-pay",
	});
}

export default Component;
