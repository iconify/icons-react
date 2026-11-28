import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxrhz3y3r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qswu94bhf.css';
import '../../css/z/zyuqr7b8r.css';
import '../../css/g/ggp-8rbry.css';
import '../../css/t/tmd1xl5jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sxrhz3y3r"/><g class="dt0cm9dhy primary"><path class="qswu94bhf"/><path class="zyuqr7b8r"/><path class="ggp-8rbry"/><path class="tmd1xl5jf"/></g>`,
		"fallback": "iconaut:church-duo",
	});
}

export default Component;
