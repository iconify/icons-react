import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riqmprbfh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riqmprbfh"/>`,
		"fallback": "memory:box-light-double-vertical-light-left",
	});
}

export default Component;
