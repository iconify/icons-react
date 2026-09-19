import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcnsi-lin.css';
import '../../css/z/zndszrbbg.css';
import '../../css/b/be299nb7x.css';
import '../../css/y/ygdmff7vr.css';
import '../../css/g/gg9-2cc4m.css';
import '../../css/w/wv1bbibzb.css';
import '../../css/g/g_o7v0jlx.css';
import '../../css/p/pj4eib5ll.css';
import '../../css/k/kxmn-2c_r.css';
import '../../css/h/h-a51c6ll.css';
import '../../css/b/b1jz_ccqx.css';
import '../../css/d/dw8qhbcdp.css';
import '../../css/t/txz6htbba.css';
import '../../css/f/fjbmo4b6i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jcnsi-lin"><path class="zndszrbbg"/><path class="be299nb7x"/><path class="ygdmff7vr"/><path class="gg9-2cc4m"/><path class="wv1bbibzb"/><path class="g_o7v0jlx"/><path class="pj4eib5ll"/><path class="kxmn-2c_r"/><path class="h-a51c6ll"/><path class="b1jz_ccqx"/><path class="dw8qhbcdp"/></g><path class="txz6htbba"/><path class="fjbmo4b6i"/>`,
		"fallback": "devicon:awk-wordmark",
	});
}

export default Component;
