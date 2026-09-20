import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndg-id0tg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndg-id0tg"/>`,
		"fallback": "lineicons:burger",
	});
}

export default Component;
