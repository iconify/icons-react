import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph8xe2vtu.css';
import '../../css/t/tik87sbqv.css';
import '../../css/s/sztca8tbw.css';
import '../../css/g/g480-tbdb.css';
import '../../css/w/wsduo_1ok.css';
import '../../css/r/rols-_b7g.css';
import '../../css/a/ajtm4xuqx.css';
import '../../css/q/qo6b-rtki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph8xe2vtu wm-shadow"/><path class="tik87sbqv wm-k"/><path class="sztca8tbw wm-k"/><path class="g480-tbdb wm-k"/><path class="wm-k wsduo_1ok"/><path class="rols-_b7g wm-k"/><path class="ajtm4xuqx wm-shine"/><path class="qo6b-rtki wm-a"/>`,
		"fallback": "withicons-pastel:check-square",
	});
}

export default Component;
