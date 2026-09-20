import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re694ccje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re694ccje"/>`,
		"fallback": "mingcute:brain-line",
	});
}

export default Component;
