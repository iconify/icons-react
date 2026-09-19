import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sni227bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sni227bxw"/>`,
		"fallback": "bx:bxs-bowl-rice",
	});
}

export default Component;
