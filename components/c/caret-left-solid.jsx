import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_t_sbtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij_t_sbtf"/>`,
		"fallback": "la:caret-left-solid",
	});
}

export default Component;
