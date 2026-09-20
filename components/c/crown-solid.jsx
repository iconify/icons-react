import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbjg4bc7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbjg4bc7o"/>`,
		"fallback": "sidekickicons:crown-solid",
	});
}

export default Component;
