import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smiup2bwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smiup2bwd"/>`,
		"fallback": "lsicon:find-outline",
	});
}

export default Component;
