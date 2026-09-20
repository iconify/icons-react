import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t85k80b2z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t85k80b2z"/>`,
		"fallback": "pinhead:comedy-mask-and-tragedy-mask",
	});
}

export default Component;
