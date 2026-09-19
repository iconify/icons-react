import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4s4wbdw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4s4wbdw"/>`,
		"fallback": "devicon-plain:haproxy",
	});
}

export default Component;
