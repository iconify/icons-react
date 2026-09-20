import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5-fos1ch.css';
import '../../css/d/dzws7456g.css';
import '../../css/w/w1xe3cctz.css';
import '../../css/z/zj_bf3w8h.css';
import '../../css/q/qpcjb6bob.css';
import '../../css/q/qon-3-m4z.css';
import '../../css/a/aef51cbss.css';
import '../../css/n/nuprbcc4r.css';
import '../../css/r/rdc1occ4y.css';
import '../../css/x/x87ea5bdq.css';
import '../../css/q/qnxip_byl.css';
import '../../css/l/ltc38ulzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5-fos1ch"/><path class="dzws7456g"/><path class="w1xe3cctz"/><path class="zj_bf3w8h"/><path class="qpcjb6bob"/><path class="qon-3-m4z"/><path class="aef51cbss"/><path class="nuprbcc4r"/><path class="rdc1occ4y"/><path class="x87ea5bdq"/><path class="qnxip_byl"/><path class="ltc38ulzb"/>`,
		"fallback": "streamline-emojis:cherries",
	});
}

export default Component;
