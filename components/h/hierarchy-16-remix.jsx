import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww1159bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ww1159bcs"/>`,
		"fallback": "streamline-sharp:hierarchy-16-remix",
	});
}

export default Component;
