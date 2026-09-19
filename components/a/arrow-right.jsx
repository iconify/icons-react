import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn1u7cctv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn1u7cctv"/>`,
		"fallback": "at-icons:arrow-right",
	});
}

export default Component;
