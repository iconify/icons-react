import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qam1p736p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qam1p736p"/>`,
		"fallback": "mingcute:follow-line",
	});
}

export default Component;
