import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhpb4hb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhpb4hb1z"/>`,
		"fallback": "hugeicons:alphabet-greek",
	});
}

export default Component;
