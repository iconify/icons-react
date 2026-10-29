import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j19i-bchg.css';
import '../../css/e/e0yn24vsm.css';
import '../../css/m/mvviabl6i.css';
import '../../css/j/jc3t-rc-r.css';
import '../../css/p/pi31t30ed.css';
import '../../css/l/lt-1xj_ez.css';
import '../../css/t/tcv4l1b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j19i-bchg wm-shadow"/><path class="e0yn24vsm wm-k"/><path class="mvviabl6i wm-k"/><path class="jc3t-rc-r wm-k"/><path class="pi31t30ed wm-k"/><path class="lt-1xj_ez wm-k"/><path class="tcv4l1b3p wm-shine"/>`,
		"fallback": "withicons-pastel:bone",
	});
}

export default Component;
