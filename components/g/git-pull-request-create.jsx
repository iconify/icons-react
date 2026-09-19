import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0oa6dbzl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0oa6dbzl"/>`,
		"fallback": "codicon:git-pull-request-create",
	});
}

export default Component;
