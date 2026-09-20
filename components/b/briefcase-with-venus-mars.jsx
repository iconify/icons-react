import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eih4zpioh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eih4zpioh"/>`,
		"fallback": "pinhead:briefcase-with-venus-mars",
	});
}

export default Component;
