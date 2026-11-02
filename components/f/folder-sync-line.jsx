import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjl68_bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjl68_bpq"/>`,
		"fallback": "mingcute:folder-sync-line",
	});
}

export default Component;
