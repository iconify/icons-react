import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owcch3byi.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owcch3byi"/>`,
		"fallback": "fa:angle-down",
	});
}

export default Component;
