import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr4jm709b.css';
import '../../css/r/rrmex0lvx.css';
import '../../css/l/lijjq1poj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hiudp9bpu.css';
import '../../css/b/bn4qn_b5m.css';
import '../../css/a/aeihgmbhh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lr4jm709b"/><path class="rrmex0lvx"/><path class="lijjq1poj"/><g class="jn8qy4bru"><circle class="hiudp9bpu"/><path class="bn4qn_b5m"/><path class="aeihgmbhh"/></g>`,
		"fallback": "openmoji:girl-standing",
	});
}

export default Component;
