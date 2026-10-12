import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9m18bbag.css';
import '../../css/d/dczsihtet.css';
import '../../css/e/et5d_5x8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z9m18bbag"/><path class="dczsihtet"/><circle class="et5d_5x8z"/></g>`,
		"fallback": "andrsrxn:eye-scan",
	});
}

export default Component;
