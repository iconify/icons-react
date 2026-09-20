import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4jwp3d8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4jwp3d8w"/>`,
		"fallback": "ix:check-out",
	});
}

export default Component;
