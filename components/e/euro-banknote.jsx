import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6wh3497s.css';
import '../../css/z/zcfsn21nh.css';
import '../../css/z/zsn_dkb-f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/prgx4tbuc.css';
import '../../css/y/yt42wrtkz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6wh3497s"/><path class="zcfsn21nh"/><path class="zsn_dkb-f"/><g class="jn8qy4bru"><path class="prgx4tbuc"/><path class="yt42wrtkz"/></g>`,
		"fallback": "openmoji:euro-banknote",
	});
}

export default Component;
