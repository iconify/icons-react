import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b-32ldj2j.css';
import '../../css/m/mmpra8jtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="b-32ldj2j"/><path class="mmpra8jtg"/></g>`,
		"fallback": "keyline-icons:brain-cog-sharp-duotone",
	});
}

export default Component;
