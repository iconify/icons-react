import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4idr3p_h.css';
import '../../css/l/le1rixbum.css';
import '../../css/y/yu42qnbzo.css';
import '../../css/k/klfzlu_vz.css';
import '../../css/y/ygjllm40u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b4idr3p_h"/><path class="le1rixbum wm-a"/><path class="wm-a yu42qnbzo"/><path class="klfzlu_vz"/><path class="wm-a ygjllm40u"/></g>`,
		"fallback": "withicons:avatar-monster-horns-duo",
	});
}

export default Component;
