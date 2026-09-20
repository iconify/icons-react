import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samnvgb_o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="samnvgb_o"/>`,
		"fallback": "simple-line-icons:bag",
	});
}

export default Component;
