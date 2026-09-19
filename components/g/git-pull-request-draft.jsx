import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5lql2bxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5lql2bxc"/>`,
		"fallback": "codicon:git-pull-request-draft",
	});
}

export default Component;
