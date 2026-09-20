import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhh05tb7v.css';
import '../../css/a/ayxx-hbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhh05tb7v"/><path class="ayxx-hbps"/>`,
		"fallback": "mingcute:door-line",
	});
}

export default Component;
