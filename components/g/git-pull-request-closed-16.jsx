import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptwnyxbcw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptwnyxbcw"/>`,
		"fallback": "octicon:git-pull-request-closed-16",
	});
}

export default Component;
