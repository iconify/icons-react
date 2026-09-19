import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl2ih_b2x.css';
import '../../css/q/qrgcibvkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl2ih_b2x"/><path class="qrgcibvkl"/>`,
		"fallback": "bx:bxl-digitalocean",
	});
}

export default Component;
