import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr4jm709b.css';
import '../../css/r/rrmex0lvx.css';
import '../../css/l/lijjq1poj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hiudp9bpu.css';
import '../../css/r/rydai1bzg.css';
import '../../css/l/lg5bhsb0i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lr4jm709b"/><path class="rrmex0lvx"/><path class="lijjq1poj"/><g class="jn8qy4bru"><circle class="hiudp9bpu"/><path class="rydai1bzg"/><path class="lg5bhsb0i"/></g>`,
		"fallback": "openmoji:boy-standing",
	});
}

export default Component;
