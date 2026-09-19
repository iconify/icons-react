import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb4x6yu9m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb4x6yu9m"/>`,
		"fallback": "at-icons:arrow-uturn-up-right",
	});
}

export default Component;
