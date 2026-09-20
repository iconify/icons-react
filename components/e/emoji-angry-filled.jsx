import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/p/pz_aku.css';
import '../../css/t/taf2xz.css';
import '../../css/h/hox66x.css';
import '../../css/u/u63-fz.css';
import '../../css/g/gslwel.css';
import '../../css/c/car43j.css';
import '../../css/k/ko-d_q.css';
import '../../css/h/hx5c9w.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkQSJCbUl"><path class="g_1xrq pz_aku taf2xz"/><path class="g_1xrq hox66x taf2xz u63-fz"/><path class="g_1xrq gslwel u63-fz"/><path class="car43j g_1xrq taf2xz u63-fz"/><path class="g_1xrq ko-d_q u63-fz"/><path class="g_1xrq hx5c9w taf2xz u63-fz"/></mask></defs><path mask="url(#SVGkQSJCbUl)" class="botfzx"/>`,
		"fallback": "line-md:emoji-angry-filled",
	});
}

export default Component;
