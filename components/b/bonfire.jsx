import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djlse4bnq.css';
import '../../css/c/c8xjk5bhx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djlse4bnq"/><path class="c8xjk5bhx"/>`,
		"fallback": "famicons:bonfire",
	});
}

export default Component;
