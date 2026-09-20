import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd86ys90j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd86ys90j"/>`,
		"fallback": "pinhead:flagpole-with-flag",
	});
}

export default Component;
