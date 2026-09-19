import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/powe_1b0z.css';
import '../../css/s/supz4n9yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="powe_1b0z"/><path class="supz4n9yl"/>`,
		"fallback": "bx:bx-trip",
	});
}

export default Component;
