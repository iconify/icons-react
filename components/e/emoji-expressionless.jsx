import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk8vunbuz.css';
import '../../css/j/jb0hwxb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk8vunbuz"/><path clip-rule="evenodd" class="jb0hwxb_a"/>`,
		"fallback": "lineicons:emoji-expressionless",
	});
}

export default Component;
