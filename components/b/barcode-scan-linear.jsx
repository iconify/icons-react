import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nb_fhzbee.css';
import '../../css/d/dzupwjbqw.css';
import '../../css/q/qdis98vvf.css';
import '../../css/r/rfh_r883n.css';
import '../../css/c/ck5t-zuxf.css';
import '../../css/b/bco3ug89k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nb_fhzbee"/><path class="dzupwjbqw"/><path class="qdis98vvf"/><path class="rfh_r883n"/><path class="ck5t-zuxf"/><path class="bco3ug89k"/></g>`,
		"fallback": "solar:barcode-scan-linear",
	});
}

export default Component;
