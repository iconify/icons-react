import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqqot8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqqot8bps"/>`,
		"fallback": "cbi:ikea-ps-2014",
	});
}

export default Component;
