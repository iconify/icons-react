import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc_rbobbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hc_rbobbh"/>`,
		"fallback": "streamline:bag-solid",
	});
}

export default Component;
