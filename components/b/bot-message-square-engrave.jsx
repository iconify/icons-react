import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b5x7swh3s.css';
import '../../css/q/qf5kqpo9g.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/y/yu3ja9btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b5x7swh3s wm-k"/><path class="qf5kqpo9g wm-shadow"/><path class="ee_t7pb7v wm-k"/><path class="wm-a yu3ja9btn"/></g>`,
		"fallback": "withicons:bot-message-square-engrave",
	});
}

export default Component;
