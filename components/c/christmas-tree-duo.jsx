import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltr5xfg5u.css';
import '../../css/b/ba9dk-7yc.css';
import '../../css/b/b2b55bbxu.css';
import '../../css/k/kikcec1yl.css';
import '../../css/v/vplo5e_jn.css';
import '../../css/f/fous3qbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ltr5xfg5u"/><path class="ba9dk-7yc wm-a"/><path class="b2b55bbxu"/><path class="kikcec1yl wm-a"/><path class="vplo5e_jn"/><path class="fous3qbeq wm-a"/></g>`,
		"fallback": "withicons:christmas-tree-duo",
	});
}

export default Component;
