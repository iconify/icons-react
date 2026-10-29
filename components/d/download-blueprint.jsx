import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zc-r6fv0d.css';
import '../../css/b/bk5_mn75t.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jauy76b2j.css';
import '../../css/b/b5g-j_i5u.css';
import '../../css/m/myxn6pb-v.css';
import '../../css/v/vwsaqtb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zc-r6fv0d"/><path class="bk5_mn75t wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jauy76b2j wm-k"/><path class="b5g-j_i5u wm-a"/><path class="myxn6pb-v wm-k"/><path class="vwsaqtb3s wm-a"/></g>`,
		"fallback": "withicons:download-blueprint",
	});
}

export default Component;
