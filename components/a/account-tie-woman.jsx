import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7ak7ib8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7ak7ib8f"/>`,
		"fallback": "mdi:account-tie-woman",
	});
}

export default Component;
