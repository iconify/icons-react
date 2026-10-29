import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbmddccto.css';
import '../../css/z/zhzrz9bbu.css';
import '../../css/a/a1itn7xck.css';
import '../../css/a/avekkmbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbmddccto wm-k"/><path class="wm-k zhzrz9bbu"/><path class="a1itn7xck wm-k"/><path class="avekkmbwq wm-shine"/></g>`,
		"fallback": "withicons-anime:cloud",
	});
}

export default Component;
