import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw1le6i8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw1le6i8b"/>`,
		"fallback": "weui:album-filled",
	});
}

export default Component;
