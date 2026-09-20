import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubic6b0s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vubic6b0s"/>`,
		"fallback": "octicon:horizontal-rule-16",
	});
}

export default Component;
