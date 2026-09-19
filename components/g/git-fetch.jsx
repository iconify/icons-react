import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjd_c8fym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjd_c8fym"/>`,
		"fallback": "codicon:git-fetch",
	});
}

export default Component;
