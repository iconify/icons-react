import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_m0xwdts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_m0xwdts"/>`,
		"fallback": "roentgen:betula-bottom-right-horizontal-line",
	});
}

export default Component;
