import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0n3663da.css';
import '../../css/p/p6wo5wb9i.css';
import '../../css/x/x-fu-hsfb.css';
import '../../css/s/s85xhebpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0n3663da"/><path class="p6wo5wb9i"/><path class="x-fu-hsfb"/><path class="s85xhebpa"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-16",
	});
}

export default Component;
