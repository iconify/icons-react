import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cag2ndsks.css';
import '../../css/p/pdncx1b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cag2ndsks"/><path class="pdncx1b3b"/>`,
		"fallback": "bx:bx-map",
	});
}

export default Component;
