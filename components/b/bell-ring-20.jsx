import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrvjxe57d.css';
import '../../css/u/uh0ujnbdw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrvjxe57d"/><path class="uh0ujnbdw"/>`,
		"fallback": "energy-icons:bell-ring-20",
	});
}

export default Component;
