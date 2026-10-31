import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya88t1baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya88t1baq"/>`,
		"fallback": "coolicons:heart-bulk-round",
	});
}

export default Component;
