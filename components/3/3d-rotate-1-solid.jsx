import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wth4-xz-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wth4-xz-q"/>`,
		"fallback": "streamline-flex:3d-rotate-1-solid",
	});
}

export default Component;
