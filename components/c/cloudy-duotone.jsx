import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix9hdebim.css';
import '../../css/q/q2875sbpw.css';
import '../../css/u/uvtbonwqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ix9hdebim"/><path class="q2875sbpw"/><path class="uvtbonwqa"/></g>`,
		"fallback": "lucide-extended:cloudy-duotone",
	});
}

export default Component;
