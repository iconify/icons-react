import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc3_7sb0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc3_7sb0v"/>`,
		"fallback": "oui:compass",
	});
}

export default Component;
