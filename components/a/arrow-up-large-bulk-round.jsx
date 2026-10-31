import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymnavtb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymnavtb7o"/>`,
		"fallback": "coolicons:arrow-up-large-bulk-round",
	});
}

export default Component;
