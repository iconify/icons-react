import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsidy9_gt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsidy9_gt"/>`,
		"fallback": "fa7-regular:circle-pause",
	});
}

export default Component;
