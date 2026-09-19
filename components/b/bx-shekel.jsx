import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmc2g5_rg.css';
import '../../css/s/s5ck4pbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmc2g5_rg"/><path class="s5ck4pbuu"/>`,
		"fallback": "bx:bx-shekel",
	});
}

export default Component;
