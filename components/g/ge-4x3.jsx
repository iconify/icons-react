import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/z/zjiwecbao.css';
import '../../css/b/b1mhhebzu.css';
import '../../css/d/d8x7f6q1i.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="zjiwecbao"/><path class="b1mhhebzu"/><path class="d8x7f6q1i"/>`,
		"fallback": "flag:ge-4x3",
	});
}

export default Component;
