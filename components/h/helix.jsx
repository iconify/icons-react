import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/h/h32s7pb1r.css';
import '../../css/k/kmg5mtb8s.css';
import '../../css/k/kxdfcnclp.css';
import '../../css/j/j14f6hbti.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><path class="h32s7pb1r"/><path class="kmg5mtb8s"/><path class="kxdfcnclp"/><path class="j14f6hbti"/></g>`,
		"fallback": "devicon:helix",
	});
}

export default Component;
