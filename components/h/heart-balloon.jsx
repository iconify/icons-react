import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sz3oe3bob.css';
import '../../css/v/vdt1c_7jd.css';
import '../../css/h/h-ln_pywc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sz3oe3bob"/><path class="vdt1c_7jd"/><path class="h-ln_pywc"/></g>`,
		"fallback": "withicons-bauhaus:heart-balloon",
	});
}

export default Component;
