import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdhauyk9x.css';
import '../../css/z/z_y9kgv8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdhauyk9x"/><path clip-rule="evenodd" class="z_y9kgv8h"/>`,
		"fallback": "mingcute:fork-spoon-fill",
	});
}

export default Component;
