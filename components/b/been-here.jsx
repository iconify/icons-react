import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjtvz0evg.css';
import '../../css/l/lzklgxbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjtvz0evg"/><path class="lzklgxbax"/>`,
		"fallback": "bx:been-here",
	});
}

export default Component;
