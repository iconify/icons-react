import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytf2gtbvo.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytf2gtbvo"/>`,
		"fallback": "memory:box-light-horizontal-down",
	});
}

export default Component;
