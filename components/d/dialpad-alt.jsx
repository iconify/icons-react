import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi48prmot.css';
import '../../css/g/gizmqm0id.css';
import '../../css/c/cmq1twbcp.css';
import '../../css/e/efjpacbmi.css';
import '../../css/u/uk7ubhblv.css';
import '../../css/r/ry74vdbzx.css';
import '../../css/c/cxj3zib5j.css';
import '../../css/j/j910xobgg.css';
import '../../css/r/rrp3g2bzp.css';
import '../../css/p/p211dfbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="pi48prmot"/><rect class="gizmqm0id"/><rect class="cmq1twbcp"/><rect class="efjpacbmi"/><rect class="uk7ubhblv"/><rect class="ry74vdbzx"/><rect class="cxj3zib5j"/><rect class="j910xobgg"/><rect class="rrp3g2bzp"/><rect class="p211dfbab"/>`,
		"fallback": "uim:dialpad-alt",
	});
}

export default Component;
