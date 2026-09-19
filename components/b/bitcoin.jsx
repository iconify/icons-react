import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm39c7bsf.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm39c7bsf"/>`,
		"fallback": "fontisto:bitcoin",
	});
}

export default Component;
