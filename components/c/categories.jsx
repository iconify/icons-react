import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krvn_ccod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krvn_ccod"/>`,
		"fallback": "carbon:categories",
	});
}

export default Component;
