import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dij20eafv.css';
import '../../css/x/x5fi_2ghi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="dij20eafv"/><path class="x5fi_2ghi"/></g>`,
		"fallback": "si:heart-alt-duotone",
	});
}

export default Component;
