import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zle2awbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zle2awbcd"/>`,
		"fallback": "mingcute:align-bottom-fill",
	});
}

export default Component;
