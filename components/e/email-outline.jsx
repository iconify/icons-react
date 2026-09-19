import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rof48-bhz.css';
import '../../css/v/vvhi0fomh.css';
import '../../css/g/gp0egaclj.css';
import '../../css/p/pvn_t0-wo.css';
import '../../css/s/se9xdnbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="rof48-bhz"/><path class="vvhi0fomh"/><circle class="gp0egaclj"/><path class="pvn_t0-wo"/><path class="se9xdnbri"/></g>`,
		"fallback": "bitcoin-icons:email-outline",
	});
}

export default Component;
