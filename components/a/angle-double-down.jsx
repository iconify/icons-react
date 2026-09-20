import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr43w4bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr43w4bsw"/>`,
		"fallback": "uim:angle-double-down",
	});
}

export default Component;
