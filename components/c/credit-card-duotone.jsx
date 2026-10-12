import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s805e4aqh.css';
import '../../css/j/joz_vvjya.css';
import '../../css/f/f0o5p1bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s805e4aqh"/><path class="joz_vvjya"/><path class="f0o5p1bcf"/></g>`,
		"fallback": "lucide-extended:credit-card-duotone",
	});
}

export default Component;
