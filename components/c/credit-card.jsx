import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo00hmxit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo00hmxit"/>`,
		"fallback": "vadivam:credit-card",
	});
}

export default Component;
