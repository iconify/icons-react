import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btsa_-1vo.css';
import '../../css/l/lpzbsfcyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btsa_-1vo"/><path class="lpzbsfcyk"/></g>`,
		"fallback": "tdesign:gesture-up-1",
	});
}

export default Component;
