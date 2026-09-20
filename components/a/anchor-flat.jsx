import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc7uu5e1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zc7uu5e1m"/>`,
		"fallback": "streamline-color:anchor-flat",
	});
}

export default Component;
