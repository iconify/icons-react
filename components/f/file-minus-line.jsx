import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njp1ombid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njp1ombid"/>`,
		"fallback": "mingcute:file-minus-line",
	});
}

export default Component;
