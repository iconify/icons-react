import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpv3mi08i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpv3mi08i"/>`,
		"fallback": "devicon-plain:fedora",
	});
}

export default Component;
