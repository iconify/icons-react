import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qog4gacfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qog4gacfj"/>`,
		"fallback": "ri:gallery-fill",
	});
}

export default Component;
