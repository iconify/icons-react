import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/garh2ib3b.css';
import '../../css/l/l397zn2sl.css';
import '../../css/t/tmf0l99tw.css';
import '../../css/v/v51ggtl0s.css';
import '../../css/r/rwrpbcc9w.css';
import '../../css/f/f3wqpy6nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="garh2ib3b"/><path class="l397zn2sl"/><path class="tmf0l99tw"/><path class="v51ggtl0s"/><path class="rwrpbcc9w"/><path class="f3wqpy6nq"/>`,
		"fallback": "solar:grid-3x2-bold",
	});
}

export default Component;
