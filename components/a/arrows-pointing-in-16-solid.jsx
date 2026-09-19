import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3x3y2w-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3x3y2w-l"/>`,
		"fallback": "heroicons:arrows-pointing-in-16-solid",
	});
}

export default Component;
