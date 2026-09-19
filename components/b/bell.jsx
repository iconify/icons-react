import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg690wp1w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg690wp1w"/>`,
		"fallback": "fa6-regular:bell",
	});
}

export default Component;
