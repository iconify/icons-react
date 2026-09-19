import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3m0v5bbq.css';
import '../../css/l/l4ea3-bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3m0v5bbq duoicon-secondary-layer"/><path class="duoicon-primary-layer l4ea3-bds"/>`,
		"fallback": "duo-icons:camera",
	});
}

export default Component;
