import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp0lh4b9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp0lh4b9h"/>`,
		"fallback": "ix:certificate-success-filled",
	});
}

export default Component;
