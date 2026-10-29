import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ypzgepbsy.css';
import '../../css/h/h26yjmb-o.css';
import '../../css/s/sn07vob-o.css';
import '../../css/r/r8vscib9a.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ypzgepbsy"/><path class="h26yjmb-o"/><path class="sn07vob-o"/><path class="r8vscib9a"/><path class="f6q-rwbae"/></g>`,
		"fallback": "withicons-bauhaus:avatar-older-man",
	});
}

export default Component;
