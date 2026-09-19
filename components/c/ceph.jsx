import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3l3y1bpn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3l3y1bpn"/>`,
		"fallback": "devicon:ceph",
	});
}

export default Component;
