import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub5bnwn-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub5bnwn-d"/>`,
		"fallback": "mdi:floppy-disc",
	});
}

export default Component;
