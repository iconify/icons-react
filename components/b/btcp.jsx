import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6g_i0b7t.css';
import '../../css/t/tt34x7bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6g_i0b7t"/><path class="tt34x7bsz"/>`,
		"fallback": "token:btcp",
	});
}

export default Component;
