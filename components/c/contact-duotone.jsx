import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4r65kbin.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/h/hftn89tbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4r65kbin"/><path class="s1a2eew1e"/><path clip-rule="evenodd" class="hftn89tbs"/></g>`,
		"fallback": "lucide-extended:contact-duotone",
	});
}

export default Component;
