import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_jhsfb2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_jhsfb2y"/>`,
		"fallback": "bi:file-diff-fill",
	});
}

export default Component;
