import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev10k0bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev10k0bqo"/>`,
		"fallback": "sidekickicons:dots-3x3-solid",
	});
}

export default Component;
