import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnn1q3d6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hnn1q3d6k"/>`,
		"fallback": "heroicons:arrow-long-right-16-solid",
	});
}

export default Component;
