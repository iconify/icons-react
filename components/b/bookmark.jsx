import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aihtfcq2s.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aihtfcq2s"/>`,
		"fallback": "fa6-solid:bookmark",
	});
}

export default Component;
