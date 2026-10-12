import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aazg57bwd.css';
import '../../css/r/r0x1nqbvh.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aazg57bwd"/><path class="r0x1nqbvh"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:boiler-x-20-bold",
	});
}

export default Component;
