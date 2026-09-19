import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnvncd_sj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnvncd_sj"/>`,
		"fallback": "fa6-solid:dumbbell",
	});
}

export default Component;
