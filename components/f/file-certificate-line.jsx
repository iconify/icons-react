import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnqcb6bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnqcb6bjr"/>`,
		"fallback": "mingcute:file-certificate-line",
	});
}

export default Component;
