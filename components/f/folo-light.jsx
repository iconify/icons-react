import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc7jjcb-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc7jjcb-e"/>`,
		"fallback": "selfhst:folo-light",
	});
}

export default Component;
