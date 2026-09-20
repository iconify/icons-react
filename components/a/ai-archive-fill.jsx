import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ges_wsysv.css';
import '../../css/f/fcjlr1v_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ges_wsysv"/><path clip-rule="evenodd" class="fcjlr1v_e"/>`,
		"fallback": "si:ai-archive-fill",
	});
}

export default Component;
