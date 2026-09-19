import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/d/dwxzg4n_g.css';
import '../../css/s/sgs1aqy-d.css';
import '../../css/l/lalwrhnoy.css';
import '../../css/r/rr_c4hbpa.css';
import '../../css/t/te_rx6b2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="dwxzg4n_g"/><path class="sgs1aqy-d"/><path class="lalwrhnoy"/><path class="rr_c4hbpa"/><path class="te_rx6b2s"/>`,
		"fallback": "fxemoji:astonished",
	});
}

export default Component;
