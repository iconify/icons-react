import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sslr2nb7i.css';
import '../../css/y/y36i_nbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sslr2nb7i"/><path class="y36i_nbgm"/>`,
		"fallback": "bx:bx-sidebar",
	});
}

export default Component;
