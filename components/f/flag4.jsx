import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie766ibcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie766ibcr"/>`,
		"fallback": "reicon:flag4",
	});
}

export default Component;
