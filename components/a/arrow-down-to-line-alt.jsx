import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gloa1yb-p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gloa1yb-p"/>`,
		"fallback": "f7:arrow-down-to-line-alt",
	});
}

export default Component;
