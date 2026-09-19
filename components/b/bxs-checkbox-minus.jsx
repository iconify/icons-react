import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjk-i_bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjk-i_bpz"/>`,
		"fallback": "bx:bxs-checkbox-minus",
	});
}

export default Component;
