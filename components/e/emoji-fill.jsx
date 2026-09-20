import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmx-s5blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmx-s5blk"/>`,
		"fallback": "mingcute:emoji-fill",
	});
}

export default Component;
