import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnuxhh1rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnuxhh1rt"/>`,
		"fallback": "tabler:circle-arrow-down-filled",
	});
}

export default Component;
