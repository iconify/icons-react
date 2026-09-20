import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afu8shbls.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afu8shbls"/>`,
		"fallback": "memory:cart",
	});
}

export default Component;
