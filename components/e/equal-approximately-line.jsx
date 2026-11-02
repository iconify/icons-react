import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq5oa0pvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq5oa0pvq"/>`,
		"fallback": "mingcute:equal-approximately-line",
	});
}

export default Component;
