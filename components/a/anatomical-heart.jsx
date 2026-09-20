import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vusr4-bku.css';
import '../../css/l/lciua-biv.css';
import '../../css/u/ur3frsohe.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wnmb49b9x.css';
import '../../css/x/x3oc4j8vn.css';
import '../../css/x/xwcno45si.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vusr4-bku"/><path class="lciua-biv"/><path class="ur3frsohe"/><g class="jn8qy4bru"><path class="wnmb49b9x"/><path class="x3oc4j8vn"/><path class="xwcno45si"/></g>`,
		"fallback": "openmoji:anatomical-heart",
	});
}

export default Component;
