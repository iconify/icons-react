import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9avuib2m.css';
import '../../css/d/d8myy4w_r.css';
import '../../css/o/ox-wivbrj.css';
import '../../css/z/zzy48nbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b9avuib2m"/><path class="d8myy4w_r wm-a"/><path class="ox-wivbrj wm-k"/><path class="wm-a zzy48nbew"/></g>`,
		"fallback": "withicons:folder-x-sketch",
	});
}

export default Component;
