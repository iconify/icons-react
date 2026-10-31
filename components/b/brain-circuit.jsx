import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f8d8tfn8o.css';
import '../../css/i/igz61wbph.css';
import '../../css/g/g2_gcdchw.css';
import '../../css/f/fqfhiflkp.css';
import '../../css/u/u3p7av-_e.css';
import '../../css/o/othyz2esa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f8d8tfn8o wm-shadow"/><path class="igz61wbph"/><path class="g2_gcdchw"/><path class="fqfhiflkp"/><path class="u3p7av-_e"/><path class="othyz2esa"/></g>`,
		"fallback": "withicons-retro:brain-circuit",
	});
}

export default Component;
