import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crnkbbbbh.css';
import '../../css/e/eut5hcb9n.css';
import '../../css/g/g_o8k6r0n.css';
import '../../css/y/y8c-tf7xk.css';
import '../../css/w/wyk34b_4d.css';
import '../../css/r/re7qv-1kr.css';
import '../../css/y/y0w9jysur.css';
import '../../css/i/ivys3f8gu.css';
import '../../css/l/l-ttow6av.css';
import '../../css/u/u53ahhe2k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crnkbbbbh"/><circle class="eut5hcb9n"/><path class="g_o8k6r0n"/><path class="y8c-tf7xk"/><path class="wyk34b_4d"/><path class="re7qv-1kr"/><path class="y0w9jysur"/><path class="ivys3f8gu"/><path class="l-ttow6av"/><path class="u53ahhe2k"/>`,
		"fallback": "openmoji:face-with-peeking-eye",
	});
}

export default Component;
