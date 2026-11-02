import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klfvsd2kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klfvsd2kq"/>`,
		"fallback": "mingcute:ear-off-line",
	});
}

export default Component;
