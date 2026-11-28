import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhhygvs3m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhhygvs3m"/>`,
		"fallback": "pullo:bookmark-simple-plus-light",
	});
}

export default Component;
