import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3fmq6b7a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3fmq6b7a"/>`,
		"fallback": "teenyicons:git-pull-outline",
	});
}

export default Component;
