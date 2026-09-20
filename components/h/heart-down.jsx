import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy2w6dp5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy2w6dp5s"/>`,
		"fallback": "tabler:heart-down",
	});
}

export default Component;
