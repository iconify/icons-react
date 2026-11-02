import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oip9e8p0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oip9e8p0o"/>`,
		"fallback": "mingcute:copy-3-line",
	});
}

export default Component;
