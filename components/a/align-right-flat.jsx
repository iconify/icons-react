import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzlt_3t1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wzlt_3t1p"/>`,
		"fallback": "streamline-color:align-right-flat",
	});
}

export default Component;
