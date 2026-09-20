import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oho-25_re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oho-25_re"/>`,
		"fallback": "mingcute:bath-line",
	});
}

export default Component;
