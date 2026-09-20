import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjaa9acpi.css';
import '../../css/r/rf3su1b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjaa9acpi"/><path clip-rule="evenodd" class="rf3su1b-m"/></g>`,
		"fallback": "streamline-sharp-color:hand-held-tablet-drawing-flat",
	});
}

export default Component;
