import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnzfpab_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnzfpab_i"/>`,
		"fallback": "thesvg-color:husqvarna",
	});
}

export default Component;
