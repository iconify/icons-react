import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx9uqla7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx9uqla7w"/>`,
		"fallback": "carbon:boot",
	});
}

export default Component;
