import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n2kxb8blp.css';
import '../../css/i/ip9ou-86q.css';
import '../../css/o/opvnhmoea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n2kxb8blp"/><path class="ip9ou-86q"/><path class="opvnhmoea wm-a"/></g>`,
		"fallback": "withicons:history",
	});
}

export default Component;
