import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9770lm5u.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9770lm5u"/>`,
		"fallback": "lineicons:github-original",
	});
}

export default Component;
