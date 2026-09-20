import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4nvk1g0s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4nvk1g0s"/>`,
		"fallback": "radix-icons:color-wheel",
	});
}

export default Component;
