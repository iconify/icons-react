import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pou3q3wuy.css';
import '../../css/v/vj_fb8bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pou3q3wuy"/><path class="vj_fb8bop"/>`,
		"fallback": "bx:home-circle",
	});
}

export default Component;
