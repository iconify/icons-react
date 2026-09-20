import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo16r8ief.css';
import '../../css/g/gcs8t4brs.css';
import '../../css/b/b2o1pwbes.css';
import '../../css/y/ywo8pdqxt.css';
import '../../css/p/p93mmtu1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wo16r8ief"/><path clip-rule="evenodd" class="gcs8t4brs"/><path class="b2o1pwbes"/><path class="ywo8pdqxt"/><path class="p93mmtu1a"/></g>`,
		"fallback": "solar:cup-hot-bold",
	});
}

export default Component;
