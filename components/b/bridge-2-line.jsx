import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsmnwl62l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsmnwl62l"/>`,
		"fallback": "mingcute:bridge-2-line",
	});
}

export default Component;
