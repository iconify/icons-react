import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtzp2h9ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtzp2h9ju"/>`,
		"fallback": "lets-icons:horizontal-top-left-main",
	});
}

export default Component;
