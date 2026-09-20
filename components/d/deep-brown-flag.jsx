import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlret9bua.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlret9bua"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:deep-brown-flag",
	});
}

export default Component;
