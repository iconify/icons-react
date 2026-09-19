import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbih7kn9p.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbih7kn9p"/><path class="lsg5j7ibl"/>`,
		"fallback": "famicons:cloud-circle-outline",
	});
}

export default Component;
