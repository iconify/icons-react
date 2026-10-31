import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkxip9b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkxip9b3n"/>`,
		"fallback": "coolicons:arrow-up-right-duotone-round",
	});
}

export default Component;
