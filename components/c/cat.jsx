import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck0-ziw1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck0-ziw1d"/>`,
		"fallback": "hugeicons:cat",
	});
}

export default Component;
