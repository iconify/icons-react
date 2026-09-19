import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0qpmvhbh.css';
import '../../css/x/xysj39n-m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0qpmvhbh"/><path class="xysj39n-m"/>`,
		"fallback": "devicon-plain:digitalocean",
	});
}

export default Component;
