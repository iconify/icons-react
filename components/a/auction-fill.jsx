import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz-u9wvbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz-u9wvbc"/>`,
		"fallback": "mingcute:auction-fill",
	});
}

export default Component;
