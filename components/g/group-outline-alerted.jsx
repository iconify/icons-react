import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r11jctauv.css';
import '../../css/p/p8uuqvbra.css';
import '../../css/y/ykuulfbfo.css';
import '../../css/o/opjmhvbbr.css';
import '../../css/e/eudsns4zh.css';
import '../../css/h/hdkqq1hth.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted r11jctauv"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted p8uuqvbra"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted ykuulfbfo"/><path class="clr-i-outline--alerted clr-i-outline-path-4--alerted opjmhvbbr"/><path class="clr-i-outline--alerted clr-i-outline-path-5--alerted eudsns4zh"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-6--alerted hdkqq1hth"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:group-outline-alerted",
	});
}

export default Component;
