import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj1dyyxvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj1dyyxvf"/>`,
		"fallback": "andrsrxn:currency-lak",
	});
}

export default Component;
