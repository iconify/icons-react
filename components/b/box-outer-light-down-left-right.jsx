import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcyll2bph.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcyll2bph"/>`,
		"fallback": "memory:box-outer-light-down-left-right",
	});
}

export default Component;
