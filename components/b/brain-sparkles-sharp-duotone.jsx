import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wwc0abswz.css';
import '../../css/k/ksu4hvb6k.css';
import '../../css/s/saonk0snb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wwc0abswz"/><path class="ksu4hvb6k"/><path class="saonk0snb"/></g>`,
		"fallback": "keyline-icons:brain-sparkles-sharp-duotone",
	});
}

export default Component;
