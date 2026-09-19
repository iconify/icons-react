import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3fklgb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3fklgb3y"/>`,
		"fallback": "bi:6-circle-fill",
	});
}

export default Component;
