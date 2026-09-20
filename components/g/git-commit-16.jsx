import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm0oa-gwa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm0oa-gwa"/>`,
		"fallback": "octicon:git-commit-16",
	});
}

export default Component;
