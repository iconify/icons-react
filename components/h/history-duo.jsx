import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l67s7zbss.css';
import '../../css/o/opvnhmoea.css';
import '../../css/n/n2kxb8blp.css';
import '../../css/i/ip9ou-86q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l67s7zbss"/><path class="opvnhmoea wm-a"/><path class="n2kxb8blp"/><path class="ip9ou-86q"/></g>`,
		"fallback": "withicons:history-duo",
	});
}

export default Component;
