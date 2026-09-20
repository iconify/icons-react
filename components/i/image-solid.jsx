import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe10_4owo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe10_4owo"/>`,
		"fallback": "rivet-icons:image-solid",
	});
}

export default Component;
