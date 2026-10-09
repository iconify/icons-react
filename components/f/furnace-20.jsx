import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1cfpg0nt.css';
import '../../css/l/lbw0b8b1k.css';
import '../../css/b/bdk_48bah.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1cfpg0nt"/><path class="lbw0b8b1k"/><path class="bdk_48bah"/>`,
		"fallback": "energy-icons:furnace-20",
	});
}

export default Component;
