import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1k-614nc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1k-614nc"/>`,
		"fallback": "teenyicons:git-commit-outline",
	});
}

export default Component;
