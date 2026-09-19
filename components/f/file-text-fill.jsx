import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8we9gb2e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8we9gb2e"/>`,
		"fallback": "bi:file-text-fill",
	});
}

export default Component;
