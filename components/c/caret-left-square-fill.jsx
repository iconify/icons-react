import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muwqqh8bm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muwqqh8bm"/>`,
		"fallback": "bi:caret-left-square-fill",
	});
}

export default Component;
