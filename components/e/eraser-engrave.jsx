import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vk3ftebjg.css';
import '../../css/i/iyp9w4pig.css';
import '../../css/p/p2im_9b3u.css';
import '../../css/i/ides4ac0q.css';
import '../../css/f/feucwswsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vk3ftebjg wm-k"/><path class="iyp9w4pig wm-a"/><path class="p2im_9b3u wm-shadow"/><path class="ides4ac0q wm-k"/><path class="feucwswsf wm-a"/></g>`,
		"fallback": "withicons:eraser-engrave",
	});
}

export default Component;
