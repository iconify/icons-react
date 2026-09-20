import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sli-xybcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sli-xybcr"/>`,
		"fallback": "mynaui:arrow-diagonal-one",
	});
}

export default Component;
