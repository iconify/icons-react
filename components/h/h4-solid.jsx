import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn6_eku6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn6_eku6i"/>`,
		"fallback": "sidekickicons:h4-solid",
	});
}

export default Component;
