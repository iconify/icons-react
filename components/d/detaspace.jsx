import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so7vdsbso.css';
import '../../css/w/wlj2oyb9h.css';
import '../../css/v/vgvp0ybrt.css';
import '../../css/n/n6glqenev.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so7vdsbso"/><path class="wlj2oyb9h"/><path class="vgvp0ybrt"/><path class="n6glqenev"/>`,
		"fallback": "devicon:detaspace",
	});
}

export default Component;
