import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyaz_cbfa.css';
import '../../css/f/fvhd-bhku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="nyaz_cbfa"/><path class="fvhd-bhku"/></g>`,
		"fallback": "si:bookmark-duotone",
	});
}

export default Component;
