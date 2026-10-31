import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb2kvcb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb2kvcb5x"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square",
	});
}

export default Component;
