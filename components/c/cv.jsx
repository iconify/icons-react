import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzeqlybma.css';
import '../../css/g/gtkyb1bks.css';
import '../../css/j/ji63kub0k.css';
import '../../css/l/liu7h9msv.css';

const viewBox = {"width":301,"height":177};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzeqlybma"/><path class="gtkyb1bks"/><path class="ji63kub0k"/><path class="liu7h9msv"/></g>`,
		"fallback": "cif:cv",
	});
}

export default Component;
