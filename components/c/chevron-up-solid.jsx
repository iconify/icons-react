import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvxwe6h2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvxwe6h2n"/>`,
		"fallback": "mynaui:chevron-up-solid",
	});
}

export default Component;
