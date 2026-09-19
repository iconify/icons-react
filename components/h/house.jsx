import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw6r-lbms.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw6r-lbms"/>`,
		"fallback": "at-icons:house",
	});
}

export default Component;
