import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uslk_-bhc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uslk_-bhc"/>`,
		"fallback": "at-icons:bold",
	});
}

export default Component;
