import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxivi6frs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxivi6frs"/>`,
		"fallback": "ix:compact-disc-filled",
	});
}

export default Component;
