import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/m/m8fuxk.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/u/u50o9y.css';
import '../../css/y/yl47yi.css';
import '../../css/k/ka8tpa.css';
import '../../css/q/qw8aly.css';
import '../../css/z/z_b1hb.css';
import '../../css/b/botfzx.css';
import '../../css/v/v3q0ew.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-40.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGejBnuc0T"><path class="g_1xrq m8fuxk yuzzkf zxndow"/><path class="g_1xrq u50o9y yuzzkf zxndow"/><path class="g_1xrq yl47yi yuzzkf zxndow"/><path class="g_1xrq ka8tpa yuzzkf zxndow"/><path class="g_1xrq qw8aly z_b1hb"/></mask></defs><path mask="url(#SVGejBnuc0T)" class="botfzx"/><path class="g_1xrq v3q0ew yuzzkf z_b1hb"/>`,
		"fallback": "line-md:car-light",
	});
}

export default Component;
