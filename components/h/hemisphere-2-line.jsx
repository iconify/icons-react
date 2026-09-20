import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lor3pcgfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lor3pcgfs"/>`,
		"fallback": "mingcute:hemisphere-2-line",
	});
}

export default Component;
