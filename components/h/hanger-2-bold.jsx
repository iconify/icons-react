import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw23xpb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw23xpb1p"/>`,
		"fallback": "solar:hanger-2-bold",
	});
}

export default Component;
