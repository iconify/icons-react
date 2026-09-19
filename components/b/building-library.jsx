import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpgr4xl-k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpgr4xl-k"/>`,
		"fallback": "heroicons-solid:building-library",
	});
}

export default Component;
