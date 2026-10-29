import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zrkah1bqf.css';
import '../../css/y/ydevm-vtj.css';
import '../../css/h/hmr2m03tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zrkah1bqf"/><path class="wm-a ydevm-vtj"/><path class="hmr2m03tm wm-s"/></g>`,
		"fallback": "withicons:bell-ring-solid",
	});
}

export default Component;
