import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2u0p4wfi.css';
import '../../css/z/z7387vb_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2u0p4wfi"/><path class="z7387vb_h"/></g>`,
		"fallback": "fluent-emoji-flat:dizzy",
	});
}

export default Component;
