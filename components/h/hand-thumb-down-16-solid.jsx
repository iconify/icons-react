import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq1twmhyj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq1twmhyj"/>`,
		"fallback": "heroicons:hand-thumb-down-16-solid",
	});
}

export default Component;
