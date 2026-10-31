import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bshp7aczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bshp7aczn"/>`,
		"fallback": "coolicons:arrow-up-round",
	});
}

export default Component;
