import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zon5_mjhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zon5_mjhb"/>`,
		"fallback": "bi:emoji-expressionless-fill",
	});
}

export default Component;
