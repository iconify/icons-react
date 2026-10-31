import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yiepiybzz.css';
import '../../css/z/zy-w-3bxd.css';
import '../../css/w/wd1m07-2i.css';
import '../../css/h/hbvnoacll.css';
import '../../css/u/uxytj4b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k yiepiybzz"/><path class="wm-k zy-w-3bxd"/><path class="wd1m07-2i wm-a"/><path class="hbvnoacll wm-a"/><path class="uxytj4b6z wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-koala",
	});
}

export default Component;
