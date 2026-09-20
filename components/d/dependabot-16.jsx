import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjopbq_ry.css';
import '../../css/r/rrbhc-fdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjopbq_ry"/><path class="rrbhc-fdi"/>`,
		"fallback": "octicon:dependabot-16",
	});
}

export default Component;
