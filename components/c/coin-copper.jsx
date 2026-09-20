import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq1-6rbmy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq1-6rbmy"/>`,
		"fallback": "memory:coin-copper",
	});
}

export default Component;
