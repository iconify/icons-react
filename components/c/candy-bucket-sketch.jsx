import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kr89-5bas.css';
import '../../css/e/epj0hxbqe.css';
import '../../css/w/w88g0g3vx.css';
import '../../css/i/i_kfu3tmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kr89-5bas"/><path class="epj0hxbqe wm-a"/><path class="w88g0g3vx wm-k"/><path class="i_kfu3tmd wm-a"/></g>`,
		"fallback": "withicons:candy-bucket-sketch",
	});
}

export default Component;
