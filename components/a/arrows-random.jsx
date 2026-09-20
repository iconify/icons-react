import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkbi4_ncu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkbi4_ncu"/>`,
		"fallback": "tabler:arrows-random",
	});
}

export default Component;
