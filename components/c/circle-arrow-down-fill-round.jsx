import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvoi15yhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvoi15yhc"/>`,
		"fallback": "coolicons:circle-arrow-down-fill-round",
	});
}

export default Component;
