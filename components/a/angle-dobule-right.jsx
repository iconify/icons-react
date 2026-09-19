import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyow3oocf.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyow3oocf"/>`,
		"fallback": "fontisto:angle-dobule-right",
	});
}

export default Component;
