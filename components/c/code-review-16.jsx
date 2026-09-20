import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvlv85b6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvlv85b6y"/>`,
		"fallback": "octicon:code-review-16",
	});
}

export default Component;
