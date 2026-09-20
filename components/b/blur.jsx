import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz94q6zst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz94q6zst"/>`,
		"fallback": "subway:blur",
	});
}

export default Component;
