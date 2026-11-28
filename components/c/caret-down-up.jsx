import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxi8rbh_d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxi8rbh_d"/>`,
		"fallback": "pullo:caret-down-up",
	});
}

export default Component;
