import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvmv32bwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvmv32bwd"/>`,
		"fallback": "selfhst:freefinance-dark",
	});
}

export default Component;
