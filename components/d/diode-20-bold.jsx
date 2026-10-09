import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6ni-hbcz.css';
import '../../css/l/l5s65ua6d.css';
import '../../css/k/k0lpkvdrp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6ni-hbcz"/><path class="l5s65ua6d"/><path class="k0lpkvdrp"/>`,
		"fallback": "energy-icons:diode-20-bold",
	});
}

export default Component;
