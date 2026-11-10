import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp54agb5c.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/k/ktki8hgxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vp54agb5c"/><path class="im-u2lvxf"/><path class="ktki8hgxj"/></g>`,
		"fallback": "lucide-extended:globe-ban-duotone",
	});
}

export default Component;
