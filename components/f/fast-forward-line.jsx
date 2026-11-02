import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxcp3cjpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxcp3cjpd"/>`,
		"fallback": "mingcute:fast-forward-line",
	});
}

export default Component;
