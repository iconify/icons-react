import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf-497bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf-497bjk"/>`,
		"fallback": "coolicons:arrow-big-down-fill-round",
	});
}

export default Component;
