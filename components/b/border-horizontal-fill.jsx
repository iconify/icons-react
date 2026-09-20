import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj-fh3btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj-fh3btt"/>`,
		"fallback": "mingcute:border-horizontal-fill",
	});
}

export default Component;
