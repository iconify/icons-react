import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xop6-hfiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xop6-hfiw"/>`,
		"fallback": "mingcute:copy-x-line",
	});
}

export default Component;
