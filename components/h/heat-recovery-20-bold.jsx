import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvlc-tsag.css';
import '../../css/d/d60aetbtw.css';
import '../../css/r/rcl7udk4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvlc-tsag"/><path class="d60aetbtw"/><path class="rcl7udk4b"/>`,
		"fallback": "energy-icons:heat-recovery-20-bold",
	});
}

export default Component;
