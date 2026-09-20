import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v24d5qvsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v24d5qvsj"/>`,
		"fallback": "sidekickicons:dots-3x2-solid",
	});
}

export default Component;
