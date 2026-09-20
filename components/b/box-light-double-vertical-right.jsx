import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psx67-bsb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psx67-bsb"/>`,
		"fallback": "memory:box-light-double-vertical-right",
	});
}

export default Component;
