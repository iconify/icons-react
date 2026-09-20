import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acs7iwixh.css';
import '../../css/n/n8sfv5b_b.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNvrGqb2w"><g class="ft5dv1b6b"><path class="acs7iwixh"/><path class="n8sfv5b_b"/></g></mask></defs><path mask="url(#SVGNvrGqb2w)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:bell-duotone-line",
	});
}

export default Component;
