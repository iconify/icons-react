import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5xqhxysz.css';
import '../../css/i/iwgzn0blj.css';
import '../../css/b/b-k2umbar.css';
import '../../css/e/e-gt1nb9e.css';
import '../../css/l/l4z9n70bk.css';
import '../../css/k/k8st4rbni.css';
import '../../css/g/gdsxz2b6z.css';
import '../../css/o/od6yz26qs.css';
import '../../css/y/y23cawbjs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="c5xqhxysz"/><path clip-rule="evenodd" class="iwgzn0blj"/><path class="b-k2umbar"/><path clip-rule="evenodd" class="e-gt1nb9e"/><path class="l4z9n70bk"/><path clip-rule="evenodd" class="k8st4rbni"/><path class="gdsxz2b6z"/><path clip-rule="evenodd" class="od6yz26qs"/><path class="y23cawbjs"/></g>`,
		"fallback": "icon-park:aiming",
	});
}

export default Component;
