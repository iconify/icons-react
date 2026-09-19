import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl5jgnb6c.css';
import '../../css/z/zdmdccc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tl5jgnb6c"/><path class="zdmdccc7m"/>`,
		"fallback": "bx:child",
	});
}

export default Component;
