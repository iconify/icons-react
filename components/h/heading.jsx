import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imoprzb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imoprzb2m"/>`,
		"fallback": "ix:heading",
	});
}

export default Component;
