import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wblnrzb4j.css';
import '../../css/u/uoytabc7k.css';
import '../../css/h/hsavmibjs.css';
import '../../css/j/jb10ulzkc.css';
import '../../css/e/eie8ot0-o.css';
import '../../css/p/ptullacdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wblnrzb4j wm-deco"/><path class="uoytabc7k wm-deco"/><path class="hsavmibjs wm-k"/><path class="jb10ulzkc wm-a"/><path class="eie8ot0-o wm-k"/><path class="ptullacdj wm-a"/></g>`,
		"fallback": "withicons:arrow-down-left-blueprint",
	});
}

export default Component;
