import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8l-kygsj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8l-kygsj"/>`,
		"fallback": "streamline-flex:camping-tent",
	});
}

export default Component;
