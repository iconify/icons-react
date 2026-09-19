import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmox-x5eg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmox-x5eg"/>`,
		"fallback": "fluent-mdl2:history",
	});
}

export default Component;
