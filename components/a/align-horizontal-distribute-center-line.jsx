import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf2iqfbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf2iqfbae"/>`,
		"fallback": "mingcute:align-horizontal-distribute-center-line",
	});
}

export default Component;
