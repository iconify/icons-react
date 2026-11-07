import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwirp0b1q.css';
import '../../css/e/efcc7ncew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwirp0b1q"/><path clip-rule="evenodd" class="efcc7ncew"/>`,
		"fallback": "solar:battery-charge-outline",
	});
}

export default Component;
