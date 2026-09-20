import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2y2jryfc.css';
import '../../css/x/xaraepzbq.css';
import '../../css/n/n1f55wtgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2y2jryfc"/><path class="xaraepzbq"/><path class="n1f55wtgp"/>`,
		"fallback": "streamline-freehand:apps-laptop-shield",
	});
}

export default Component;
