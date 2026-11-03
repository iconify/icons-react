import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv2wj22ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv2wj22ju"/>`,
		"fallback": "sidekickicons:forward-bar",
	});
}

export default Component;
