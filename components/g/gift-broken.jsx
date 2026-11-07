import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oyjqk5bct.css';
import '../../css/d/dxon-mtqm.css';
import '../../css/o/o6zz0vbkl.css';
import '../../css/m/mzn_blbqr.css';
import '../../css/d/dadlzrowr.css';
import '../../css/r/raokm3b8s.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oyjqk5bct"/><path class="dxon-mtqm"/><path class="o6zz0vbkl"/><path class="mzn_blbqr"/><path class="dadlzrowr"/><path class="raokm3b8s"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:gift-broken",
	});
}

export default Component;
