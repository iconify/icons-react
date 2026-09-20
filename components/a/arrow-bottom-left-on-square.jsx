import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voys5lbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voys5lbzc"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square",
	});
}

export default Component;
