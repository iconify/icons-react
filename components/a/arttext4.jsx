import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_leqbidc.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_leqbidc"/>`,
		"fallback": "file-icons:arttext4",
	});
}

export default Component;
