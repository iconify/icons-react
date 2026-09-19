import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plt0i6b8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plt0i6b8y"/>`,
		"fallback": "heroicons-solid:chart-square-bar",
	});
}

export default Component;
