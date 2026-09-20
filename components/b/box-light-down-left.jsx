import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwo95fbnl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwo95fbnl"/>`,
		"fallback": "memory:box-light-down-left",
	});
}

export default Component;
