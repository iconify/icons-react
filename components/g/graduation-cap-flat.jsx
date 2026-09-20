import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vgoaambvi.css';
import '../../css/k/k0_cajbag.css';
import '../../css/l/ltk06_b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vgoaambvi"/><path class="k0_cajbag"/><path class="ltk06_b4f"/></g>`,
		"fallback": "streamline-sharp-color:graduation-cap-flat",
	});
}

export default Component;
