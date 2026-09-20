import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxv9kabbv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxv9kabbv"/>`,
		"fallback": "radix-icons:double-arrow-right",
	});
}

export default Component;
