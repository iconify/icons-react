import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aazg57bwd.css';
import '../../css/r/r0x1nqbvh.css';
import '../../css/a/asc4-fm2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aazg57bwd"/><path class="r0x1nqbvh"/><path class="asc4-fm2e"/>`,
		"fallback": "energy-icons:boiler-check-20-bold",
	});
}

export default Component;
