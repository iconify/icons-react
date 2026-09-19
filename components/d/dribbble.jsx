import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckwg36bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckwg36bip"/>`,
		"fallback": "bxl:dribbble",
	});
}

export default Component;
