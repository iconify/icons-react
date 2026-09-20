import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfqyf4b0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfqyf4b0o"/>`,
		"fallback": "radix-icons:border-dashed",
	});
}

export default Component;
