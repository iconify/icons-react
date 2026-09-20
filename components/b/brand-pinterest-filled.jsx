import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdk-94blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdk-94blo"/>`,
		"fallback": "tabler:brand-pinterest-filled",
	});
}

export default Component;
