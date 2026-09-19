import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0m2oybsj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0m2oybsj"/>`,
		"fallback": "fa7-brands:app-store-ios",
	});
}

export default Component;
