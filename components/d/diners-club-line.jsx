import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhh_ol2fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhh_ol2fn"/>`,
		"fallback": "mingcute:diners-club-line",
	});
}

export default Component;
