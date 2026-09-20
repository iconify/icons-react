import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2wt_3bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2wt_3bzp"/>`,
		"fallback": "mynaui:credit-card-plus-solid",
	});
}

export default Component;
