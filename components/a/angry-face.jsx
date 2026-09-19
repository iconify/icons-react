import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxary8a8p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxary8a8p"/>`,
		"fallback": "at-icons:angry-face",
	});
}

export default Component;
