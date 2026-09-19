import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd9fb2r4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd9fb2r4r"/>`,
		"fallback": "at-icons:arrow-uturn-right-down",
	});
}

export default Component;
