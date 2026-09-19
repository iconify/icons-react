import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl30ird_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl30ird_j"/>`,
		"fallback": "icomoon-free:bookmark",
	});
}

export default Component;
