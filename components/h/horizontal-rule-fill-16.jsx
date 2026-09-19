import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlvzh0b6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlvzh0b6v"/>`,
		"fallback": "garden:horizontal-rule-fill-16",
	});
}

export default Component;
