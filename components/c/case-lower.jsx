import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoe16xbjz.css';
import '../../css/v/vzbxnwb4s.css';
import '../../css/b/bd1dqqblj.css';
import '../../css/i/ifhqcug1a.css';
import '../../css/g/g7t9967ev.css';
import '../../css/d/dug9gp01w.css';
import '../../css/g/gnjaw1bet.css';
import '../../css/d/dd-52fqsb.css';
import '../../css/f/fabs0zbqt.css';
import '../../css/l/l1plhzbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xoe16xbjz"/><path class="vzbxnwb4s wm-k"/><path class="bd1dqqblj wm-k"/><path class="ifhqcug1a wm-k"/><path class="g7t9967ev wm-k"/><path class="dug9gp01w wm-shine"/><path class="gnjaw1bet wm-a"/><path class="dd-52fqsb wm-a"/><path class="fabs0zbqt wm-a"/><path class="l1plhzbik wm-a"/>`,
		"fallback": "withicons-pastel:case-lower",
	});
}

export default Component;
