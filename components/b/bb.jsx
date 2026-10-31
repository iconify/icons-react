import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olre0fbor.css';
import '../../css/g/gbpbkshrq.css';
import '../../css/d/dk5a-7n8b.css';
import '../../css/t/tx8o6v2lr.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olre0fbor"/><path class="gbpbkshrq"/><path class="dk5a-7n8b"/><path class="tx8o6v2lr"/></g>`,
		"fallback": "cif:bb",
	});
}

export default Component;
