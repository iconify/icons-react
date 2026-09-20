import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd0zhtbgx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd0zhtbgx"/>`,
		"fallback": "memory:border-bottom-left",
	});
}

export default Component;
