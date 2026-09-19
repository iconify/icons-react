import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh2nc6bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh2nc6bnj"/>`,
		"fallback": "bx:bx-stats",
	});
}

export default Component;
