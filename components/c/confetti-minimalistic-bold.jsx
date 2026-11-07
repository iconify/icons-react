import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxo5sn3-u.css';
import '../../css/z/zy6dorwas.css';
import '../../css/n/ndl6odl-f.css';
import '../../css/d/d7i1yqwvm.css';
import '../../css/i/ijsshlf_g.css';
import '../../css/b/bw8xe98gx.css';
import '../../css/n/n1yw0g4eo.css';
import '../../css/r/rqjihkb6a.css';
import '../../css/l/l7k7ey7kb.css';
import '../../css/s/si9n3tbei.css';
import '../../css/r/rdr0chbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxo5sn3-u"/><path class="zy6dorwas"/><path class="ndl6odl-f"/><path class="d7i1yqwvm"/><path class="ijsshlf_g"/><path class="bw8xe98gx"/><path class="n1yw0g4eo"/><path class="rqjihkb6a"/><path class="l7k7ey7kb"/><path class="si9n3tbei"/><path class="rdr0chbof"/>`,
		"fallback": "solar:confetti-minimalistic-bold",
	});
}

export default Component;
