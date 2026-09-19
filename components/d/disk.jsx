import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw96a2bzf.css';
import '../../css/w/wqd1ubbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer gw96a2bzf"/><path class="duoicon-primary-layer wqd1ubbic"/>`,
		"fallback": "duo-icons:disk",
	});
}

export default Component;
