import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar3grmbxb.css';
import '../../css/o/ohscxxbjx.css';
import '../../css/x/x0ga9cfcw.css';
import '../../css/o/o7fi5_bdy.css';
import '../../css/q/qwupe9yaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar3grmbxb"/><path class="ohscxxbjx"/><path class="x0ga9cfcw"/><path clip-rule="evenodd" class="o7fi5_bdy"/><path class="qwupe9yaw"/>`,
		"fallback": "solar:cassette-2-bold",
	});
}

export default Component;
