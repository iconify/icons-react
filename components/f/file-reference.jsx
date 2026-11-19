import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/er9262b4y.css';
import '../../css/g/g1efina1z.css';
import '../../css/o/o0ed_gcnp.css';
import '../../css/o/o522zca7e.css';
import '../../css/t/tco6ifb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="er9262b4y"/><path class="g1efina1z"/><path class="o0ed_gcnp"/><path class="o522zca7e"/><path class="tco6ifb_p"/></g>`,
		"fallback": "andrsrxn:file-reference",
	});
}

export default Component;
