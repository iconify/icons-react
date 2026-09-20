import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y95t8mryw.css';
import '../../css/v/vr3o4bbfg.css';
import '../../css/l/lg0q5_b5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y95t8mryw"/><path class="vr3o4bbfg"/><path class="lg0q5_b5p"/></g>`,
		"fallback": "streamline-color:beach-flat",
	});
}

export default Component;
