import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bvb7sibpb.css';
import '../../css/i/i5qce4b9c.css';
import '../../css/m/m08nw2b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bvb7sibpb"/><path class="i5qce4b9c"/><path class="m08nw2b3z"/></g>`,
		"fallback": "keyline-icons:archive-sharp-duotone",
	});
}

export default Component;
