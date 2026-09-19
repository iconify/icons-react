import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moy3yg0zn.css';
import '../../css/k/kro03pzgo.css';
import '../../css/k/kj79ib8dw.css';
import '../../css/b/b9e0_es5a.css';
import '../../css/d/dxifn6oaq.css';
import '../../css/o/oa_t-5x_r.css';
import '../../css/s/sn97n1brp.css';
import '../../css/h/hew_pj1gu.css';
import '../../css/i/itvth7p_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moy3yg0zn"/><path class="kro03pzgo"/><path class="kj79ib8dw"/><g><path class="b9e0_es5a"/><path class="dxifn6oaq"/><path class="oa_t-5x_r"/></g><g><path class="sn97n1brp"/><path class="hew_pj1gu"/><path class="itvth7p_h"/></g>`,
		"fallback": "ion:android-options",
	});
}

export default Component;
