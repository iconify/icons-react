import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh2ph_5cm.css';
import '../../css/b/brj919_4l.css';
import '../../css/i/itoigib-k.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/dm8dtzb9t.css';
import '../../css/p/p6-p-0qyp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh2ph_5cm"/><path class="brj919_4l"/><path class="itoigib-k"/><g class="brzn_0bpr"><path class="dm8dtzb9t"/><path class="p6-p-0qyp"/></g>`,
		"fallback": "openmoji:circle-with-right-half-black",
	});
}

export default Component;
