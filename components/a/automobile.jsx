import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp7s5opfx.css';
import '../../css/s/s96vfc-kz.css';
import '../../css/d/d5u5u1p2j.css';
import '../../css/d/d-mvq1bzd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nk5a82b-w.css';
import '../../css/o/onv_tkugb.css';
import '../../css/c/cy2wmub_t.css';
import '../../css/b/bmrfq7i_r.css';
import '../../css/c/cnhe-sbgz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp7s5opfx"/><path class="s96vfc-kz"/><path class="d5u5u1p2j"/><path class="d-mvq1bzd"/><g class="jn8qy4bru"><path class="nk5a82b-w"/><path class="onv_tkugb"/><circle class="cy2wmub_t"/><circle class="bmrfq7i_r"/><path class="cnhe-sbgz"/></g>`,
		"fallback": "openmoji:automobile",
	});
}

export default Component;
