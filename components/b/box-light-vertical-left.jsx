import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h47jajpue.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h47jajpue"/>`,
		"fallback": "memory:box-light-vertical-left",
	});
}

export default Component;
