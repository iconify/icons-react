import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k42v9bvgu.css';
import '../../css/z/z3o5mebhd.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k42v9bvgu"/><path class="z3o5mebhd"/>`,
		"fallback": "tabler-flags:denmark",
	});
}

export default Component;
